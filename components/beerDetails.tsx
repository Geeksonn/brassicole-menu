import React from 'react';

import { Beers } from '@lib/types';

import BeerLayout from './beerLayout';
import { leftArrowIcon } from './icons';

import css from '@styles/beers.module.css';

type BeerBetailsProps = {
    beer: Beers;
    close: () => void;
};

const BeerDetails = ({ beer, close }: BeerBetailsProps) => {
    return (
        <div className={css.detailWrapper}>
            <div className={css.backBtn} onClick={() => close()}>
                <i>{leftArrowIcon}</i>
                <p>Retour à la carte</p>
            </div>
            <BeerLayout beer={beer} imgSrc={beer.image} imgW={71} imgH={289} />
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
