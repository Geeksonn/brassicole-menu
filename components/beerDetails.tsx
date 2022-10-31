import React from 'react';

import Image from 'next/image';

import { Beers } from '@lib/types';

import BeerLayout from './beerLayout';

import css from '@styles/beers.module.css';

type BeerBetailsProps = {
    beer: Beers;
    close: () => void;
};

const arrowIcon = (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM24 10.5H2V13.5H24V10.5Z'
            fill='white'
        />
    </svg>
);

const BeerDetails = ({ beer, close }: BeerBetailsProps) => {
    return (
        <div className={css.detailWrapper}>
            <div className={css.backBtn} onClick={() => close()}>
                <i>{arrowIcon}</i>
                <p>Retour à la carte</p>
            </div>
            <BeerLayout beer={beer} imgSrc='/beer_cropped.png' imgW={71} imgH={289} />
            {/*}
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
    */}
        </div>
    );
};

export default BeerDetails;
