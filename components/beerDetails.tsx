import React from 'react';

import { Beers } from '@lib/types';

import css from '@styles/beers.module.css';
import Image from 'next/image';

type BeerBetailsProps = {
    beer: Beers;
    close: any; // TODO
};

const arrowIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM24 10.5H2V13.5H24V10.5Z'
            fill='white'
        />
    </svg>
);

const breweryIcon = (
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

const BeerDetails = ({ beer, close }: BeerBetailsProps) => {
    return (
        <div className={css.detailWrapper}>
            <div className={css.backBtn} onClick={() => close()}>
                <i>{arrowIcon}</i>
                <p>Retour à la carte</p>
            </div>
            <div className={css.infoWrapper}>
                <div className={css.beerInfoImage}>
                    <Image src='/beer_cropped.png' width='71' height='289' />
                </div>
                <div className={css.beerInfoContent}>
                    <h1>{beer.name}</h1>
                    <p className={css.detailType}>{beer.type}</p>
                    <div className='flex mt-4'>
                        <div className={css.dataContainer}>{`${beer.degree} %`}</div>
                        <div className={css.dataContainer}>{`IBU ${beer.ibu}`}</div>
                    </div>
                    <div className='flex w-full mt-9 pb-3 border-b border-b-dark-white'>
                        <i className='mr-3'>{breweryIcon}</i>
                        <p className='text-dark-green'>{beer.brewery}</p>
                    </div>
                    <p className='my-6 font-light'>{beer.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BeerDetails;
