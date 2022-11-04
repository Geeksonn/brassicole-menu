import React from 'react';

import Image from 'next/image';
import { Beers } from '@lib/types';

import { breweryIcon } from './icons';
import css from '@styles/beers.module.css';
import useMediaQuery from './useMediaQuery';
import { MAX_WIDTH_MOB } from '@lib/constants';

type BeerLayoutProps = {
    beer: Beers;
    imgSrc: string;
    imgW: number;
    imgH: number;
};

const BeerLayout: React.FunctionComponent<BeerLayoutProps> = (props) => {
    const { beer, imgSrc, imgW, imgH } = props;
    const isMobile = useMediaQuery(MAX_WIDTH_MOB);

    const beerImgJsx = () => {
        return (
            <div className={css.beerInfoImage}>
                <Image src={process.env.NEXT_PUBLIC_IMG_CDN + imgSrc + '/'} width={imgW} height={imgH} />
            </div>
        );
    };
    const beerInfoJsx = () => {
        let jsx;

        if (isMobile) {
            jsx = (
                <div className='flex flex-col'>
                    <div className='flex justify-evenly'>
                        {beerImgJsx()}
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
                        </div>
                    </div>
                    <p className='mb-6 font-light whitespace-pre-line'>{beer.description}</p>
                </div>
            );
        } else {
            jsx = (
                <>
                    {beerImgJsx()}
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
                        <p className='my-6 font-light whitespace-pre-line'>{beer.description}</p>
                    </div>
                </>
            );
        }

        return jsx;
    };

    return <div className={css.infoWrapper}>{beerInfoJsx()}</div>;
};

export default BeerLayout;
