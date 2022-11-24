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
            <BeerLayout beer={beer} imgSrc={beer.imageCard} />
        </div>
    );
};

export default BeerDetails;
