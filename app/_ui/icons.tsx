const LINE_SIZE = '180';

export const roseEllips = (
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

export const roseLine = (
    <svg
        width='1'
        height={LINE_SIZE}
        viewBox={`0 0 1 ${LINE_SIZE}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <line x1='0.5' y1='2.18557e-08' x2='0.499997' y2={LINE_SIZE} stroke='#EEA4C8' />
    </svg>
);

export const yellowEllips = (
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

export const yellowLine = (
    <svg
        width='1'
        height={LINE_SIZE}
        viewBox={`0 0 1 ${LINE_SIZE}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <line x1='0.5' y1='2.18557e-08' x2='0.499997' y2={LINE_SIZE} stroke='#F59F00' />
    </svg>
);

export const ResetIcon: React.FunctionComponent = () => {
    return (
        <svg
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='h-6 mr-4 cursor-pointer lg:h-8 lg:mr-6'>
            <path
                d='M433.05,127.87a233.52,233.52,0,0,0-101.4-69L459,32.56a5.16,5.16,0,0,0,4-6.11L458.4,4.12a5.18,5.18,0,0,0-6.12-4L268,38.21a5.17,5.17,0,0,0-3.93,6.48l51.38,181a5.17,5.17,0,0,0,6.38,3.57L343.78,223a5.18,5.18,0,0,0,3.57-6.39L310.49,86.92A199.84,199.84,0,0,1,455.75,279.13c0,110.15-89.61,199.75-199.75,199.75S56.25,389.28,56.25,279.13a199.38,199.38,0,0,1,47.54-129.35,5.16,5.16,0,0,0-.49-7.2l-17-15.19a5.18,5.18,0,0,0-7.39.49,232.87,232.87,0,1,0,354.11,0Z'
                fill='#FFFFFF'
            />
        </svg>
    );
};

export const BreweryIcon: React.FunctionComponent = () => {
    return (
        <svg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_34_219)'>
                <path
                    d='M25.9999 21.4272H10.2738C10.268 21.3413 10.2591 21.2687 10.2585 21.1956C10.2572 20.4758 10.2515 19.7561 10.2642 19.0371C10.2661 18.9181 10.3208 18.7698 10.4029 18.6871C12.3115 16.7659 14.2258 14.8505 16.1459 12.9408C16.2292 12.8581 16.3755 12.797 16.4931 12.7957C17.5756 12.7849 18.6587 12.7926 19.7418 12.7856C19.9084 12.7843 20.0222 12.8371 20.138 12.9535C22.0193 14.8422 23.9043 16.7271 25.7894 18.6113C25.8537 18.6756 25.9293 18.7272 25.9999 18.7851V21.4272Z'
                    fill='#004335'
                />
                <path
                    d='M25.9999 7.45484C24.4437 7.45484 22.8874 7.45484 21.3311 7.45484C20.7002 7.45484 20.4147 7.73866 20.414 8.36546C20.4134 9.32062 20.414 10.2758 20.414 11.2481H15.8571C15.8527 11.1737 15.8444 11.1005 15.8444 11.0267C15.8438 10.1129 15.84 9.19908 15.8444 8.28464C15.8565 5.69661 17.5266 3.58965 20.0477 3.01057C20.4554 2.91703 20.8853 2.89094 21.3057 2.88712C22.8702 2.87312 24.4348 2.88139 25.9999 2.88139V7.45484Z'
                    fill='#004335'
                />
                <path d='M10.2578 26V22.9512H25.9999V26H10.2578Z' fill='#004335' />
                <path d='M0 26V22.9678H8.73472V26H0Z' fill='#004335' />
                <path
                    d='M11.9305 15.0077C11.6284 15.3061 11.3448 15.5836 11.0643 15.8642C10.352 16.5763 9.64411 17.2922 8.92608 17.9985C8.78998 18.1328 8.72765 18.2645 8.72956 18.4599C8.74037 19.3489 8.73401 20.2378 8.73401 21.1262V21.4132H0.0266378C0.0196419 21.3833 0.00247011 21.3445 0.00247011 21.3063C0.000562137 20.5274 -0.00261782 19.7485 0.00565008 18.9702C0.00692206 18.8824 0.0565295 18.7736 0.119493 18.71C2.04782 16.7729 3.97997 14.8391 5.9172 12.9103C5.98461 12.8428 6.10545 12.7957 6.20149 12.7951C7.31829 12.7875 8.43509 12.7881 9.55189 12.7938C9.63521 12.7938 9.74015 12.8263 9.79739 12.8823C10.5027 13.5765 11.2004 14.2778 11.9305 15.0077Z'
                    fill='#004335'
                />
                <path d='M5.64771 11.2475V0H10.1868V11.2475H5.64771Z' fill='#004335' />
            </g>
            <defs>
                <clipPath id='clip0_34_219'>
                    <rect width='26' height='26' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
};

export const LeftArrowIcon: React.FunctionComponent = () => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM24 10.5H2V13.5H24V10.5Z'
                fill='white'
            />
        </svg>
    );
};

export const RightArrowIcon: React.FunctionComponent = () => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM-3.4421e-09 13.5L22 13.5L22 10.5L3.4421e-09 10.5L-3.4421e-09 13.5Z'
                fill='white'
            />
        </svg>
    );
};
