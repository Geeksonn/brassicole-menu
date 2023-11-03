'use client';

import React from 'react';

const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = React.useState(false);

    const updateTarget = React.useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    React.useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        // Check on initial render (callback is called only when a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};

export default useMediaQuery;
