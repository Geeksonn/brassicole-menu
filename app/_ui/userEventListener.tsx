'use client';

import React from 'react';

const UserEventListener: React.FunctionComponent = () => {
    const zoomKeys = ['61', '107', '173', '109', '187', '189'];

    React.useEffect(() => {
        window.addEventListener('contextmenu', (e) => e.preventDefault());
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && zoomKeys.includes(e.key)) {
                e.preventDefault();
            }
        });
        document.addEventListener(
            'wheel',
            (e) => {
                if (e.ctrlKey) {
                    e.preventDefault();
                }
            },
            {
                passive: false,
            }
        );
        window.addEventListener('touchstart', (e) => {
            console.log('Event touch --> ', e.touches.length, e.touches, e);
            if (e.touches.length > 1) e.preventDefault();
        });
    }, []);

    return null;
};

export default UserEventListener;
