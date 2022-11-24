const LINE_SIZE = '180';

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
    <svg
        width='1'
        height={LINE_SIZE}
        viewBox={`0 0 1 ${LINE_SIZE}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <line x1='0.5' y1='2.18557e-08' x2='0.499997' y2={LINE_SIZE} stroke='#EEA4C8' />
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
    <svg
        width='1'
        height={LINE_SIZE}
        viewBox={`0 0 1 ${LINE_SIZE}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <line x1='0.5' y1='2.18557e-08' x2='0.499997' y2={LINE_SIZE} stroke='#F59F00' />
    </svg>
);

const resetIcon = (
    <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <path
            d='M433.05,127.87a233.52,233.52,0,0,0-101.4-69L459,32.56a5.16,5.16,0,0,0,4-6.11L458.4,4.12a5.18,5.18,0,0,0-6.12-4L268,38.21a5.17,5.17,0,0,0-3.93,6.48l51.38,181a5.17,5.17,0,0,0,6.38,3.57L343.78,223a5.18,5.18,0,0,0,3.57-6.39L310.49,86.92A199.84,199.84,0,0,1,455.75,279.13c0,110.15-89.61,199.75-199.75,199.75S56.25,389.28,56.25,279.13a199.38,199.38,0,0,1,47.54-129.35,5.16,5.16,0,0,0-.49-7.2l-17-15.19a5.18,5.18,0,0,0-7.39.49,232.87,232.87,0,1,0,354.11,0Z'
            fill='#FFFFFF'
        />
    </svg>
);

export { roseEllips, roseLine, yellowEllips, yellowLine, resetIcon };
