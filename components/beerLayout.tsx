import React from 'react';

import Image from 'next/image';
import { Beers } from '@lib/types';

import { breweryIcon } from './icons';
import css from '@styles/beers.module.css';

type BeerLayoutProps = {
    beer: Beers;
    imgSrc: string;
    imgW: number;
    imgH: number;
};

const BeerLayout: React.FunctionComponent<BeerLayoutProps> = (props) => {
    const { beer, imgSrc, imgW, imgH } = props;
    return (
        <div className={css.infoWrapper}>
            <div className={css.beerInfoImage}>
                <Image src={imgSrc} width={imgW} height={imgH} />
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
    );
};

export default BeerLayout;
