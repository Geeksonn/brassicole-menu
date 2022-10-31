const roseEllips = (
    <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='26' cy='26' r='13' fill='#EEA4C8' />
        <g filter='url(#filter0_d_0_1)'>
            <circle cx='26' cy='26' r='6' fill='white' />
        </g>
        <defs>
            <filter
                id='filter0_d_0_1'
                x='0'
                y='0'
                width='52'
                height='52'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='10' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape' />
            </filter>
        </defs>
    </svg>
);

const roseLine = (
    <svg width='1' height='120' viewBox='0 0 1 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line x1='0.5' y1='2.18557e-08' x2='0.499997' y2='120' stroke='#EEA4C8' />
    </svg>
);

const yellowEllips = (
    <svg width='52' height='52' viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <circle cx='26' cy='26' r='13' fill='#F59F00' />
        <g filter='url(#filter0_d_0_1)'>
            <circle cx='26' cy='26' r='6' fill='white' />
        </g>
        <defs>
            <filter
                id='filter0_d_0_1'
                x='0'
                y='0'
                width='52'
                height='52'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'>
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                />
                <feOffset />
                <feGaussianBlur stdDeviation='10' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0' />
                <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_0_1' />
                <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_0_1' result='shape' />
            </filter>
        </defs>
    </svg>
);

const yellowLine = (
    <svg width='1' height='120' viewBox='0 0 1 120' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <line x1='0.5' y1='2.18557e-08' x2='0.499997' y2='120' stroke='#F59F00' />
    </svg>
);

export { roseEllips, roseLine, yellowEllips, yellowLine };
