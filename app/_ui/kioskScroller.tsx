'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

/*
 * Rotated kiosk mode (html[data-rot], set by ROTATION_SCRIPT in layout.tsx): the whole page is
 * rotated in CSS, so it scrolls inside this div instead of the window (a fixed footer stays
 * pinned to the rotated body). Outside that mode this is a plain div and nothing here runs.
 *
 * On macOS a touch screen sends mouse events, not touch events: a finger drag would select
 * instead of scrolling. Mouse drags are therefore turned into scrolling, with some inertia.
 */

const DRAG_THRESHOLD = 10; // px a press must travel to become a drag; below it, it stays a tap
const FRICTION = 0.95; // inertia decay per frame after release

const isRotated = () => document.documentElement.dataset.rot !== undefined;

// Screen-space movement -> movement in the rotated page's own space.
const toPageSpace = (dx: number, dy: number) => {
    const inverse = new DOMMatrix(getComputedStyle(document.body).transform).inverse();
    const p = inverse.transformPoint(new DOMPoint(dx, dy));
    const o = inverse.transformPoint(new DOMPoint(0, 0));
    return { x: p.x - o.x, y: p.y - o.y };
};

const KioskScroller: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const positions = React.useRef(new Map<string, number>());

    // The div outlives navigations, so its scroll position must be handled per page: back to
    // the top on a new page, back where the visitor was when returning to one.
    React.useEffect(() => {
        const el = ref.current;
        if (!el || !isRotated()) return;

        el.scrollTop = positions.current.get(pathname) ?? 0;
        const save = () => positions.current.set(pathname, el.scrollTop);
        el.addEventListener('scroll', save, { passive: true });
        return () => el.removeEventListener('scroll', save);
    }, [pathname]);

    React.useEffect(() => {
        const el = ref.current;
        if (!el || !isRotated()) return;

        let drag: { x: number; y: number; top: number; moved: boolean } | null = null;
        let velocity = 0; // px/ms, in scrollTop direction
        let lastTop = 0;
        let lastTime = 0;
        let frame = 0;
        let swallowClick = false;

        const onDown = (e: PointerEvent) => {
            if (e.pointerType === 'touch' || e.button !== 0) return;
            cancelAnimationFrame(frame);
            swallowClick = false;
            drag = { x: e.clientX, y: e.clientY, top: el.scrollTop, moved: false };
            velocity = 0;
            lastTop = el.scrollTop;
            lastTime = e.timeStamp;
        };

        const onMove = (e: PointerEvent) => {
            if (!drag) return;
            const d = toPageSpace(e.clientX - drag.x, e.clientY - drag.y);
            if (!drag.moved && Math.hypot(d.x, d.y) < DRAG_THRESHOLD) return;
            drag.moved = true;
            el.scrollTop = drag.top - d.y;

            const dt = e.timeStamp - lastTime;
            if (dt > 0) velocity = 0.8 * ((el.scrollTop - lastTop) / dt) + 0.2 * velocity;
            lastTop = el.scrollTop;
            lastTime = e.timeStamp;
        };

        const onUp = (e: PointerEvent) => {
            if (!drag) return;
            const moved = drag.moved;
            drag = null;
            if (!moved) return;

            // The release of a drag must not also click the link/button under the finger.
            swallowClick = true;
            if (e.timeStamp - lastTime > 100) return; // finger held still before release

            let step = velocity * 16; // px per frame
            const glide = () => {
                if (Math.abs(step) < 0.5) return;
                el.scrollTop += step;
                step *= FRICTION;
                frame = requestAnimationFrame(glide);
            };
            frame = requestAnimationFrame(glide);
        };

        const onCancel = () => {
            drag = null;
        };

        const onClick = (e: MouseEvent) => {
            if (!swallowClick) return;
            swallowClick = false;
            e.preventDefault();
            e.stopPropagation();
        };

        // Links and images are natively draggable, which would steal the pointer mid-scroll.
        const onDragStart = (e: DragEvent) => e.preventDefault();

        el.addEventListener('pointerdown', onDown);
        el.addEventListener('dragstart', onDragStart);
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onCancel);
        window.addEventListener('click', onClick, true);
        return () => {
            cancelAnimationFrame(frame);
            el.removeEventListener('pointerdown', onDown);
            el.removeEventListener('dragstart', onDragStart);
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
            window.removeEventListener('pointercancel', onCancel);
            window.removeEventListener('click', onClick, true);
        };
    }, []);

    return (
        <div ref={ref} className='kiosk-scroller'>
            {children}
        </div>
    );
};

export default KioskScroller;
