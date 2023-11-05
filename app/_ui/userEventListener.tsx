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
    }, []);

    return null;
};

export default UserEventListener;
