import React from 'react';

import { Beers } from '@lib/types';

import { breweryIcon } from './icons';
import css from '@styles/beers.module.css';
import useMediaQuery from './useMediaQuery';
import { BEER_BIGGER_IMG, MAX_WIDTH_MOB } from '@lib/constants';

type BeerLayoutProps = {
    beer: Beers;
    imgSrc: string;
};

const BeerLayout: React.FunctionComponent<BeerLayoutProps> = (props) => {
    const { beer, imgSrc } = props;
    const isMobile = useMediaQuery(MAX_WIDTH_MOB);

    const beerImgJsx = (name: string) => {
        const imgPath = process.env.NEXT_PUBLIC_IMG_CDN + imgSrc + '/';
        const imgClass = isMobile ? 'w-16' : 'w-32';
        const imgPos = BEER_BIGGER_IMG.includes(name) ? 'mt-12' : '-mt-12';

        return (
            <div className={`${css.beerInfoImage} ${imgPos}`}>
                <img src={imgPath} className={imgClass} />
            </div>
        );
    };
    const beerInfoJsx = () => {
        let jsx;

        if (isMobile) {
            jsx = (
                <div className='flex flex-col'>
                    <div className='flex justify-evenly'>
                        {beerImgJsx(beer.name)}
                        <div className={css.beerInfoContent}>
                            <h1>{beer.name}</h1>
                            <div className={css.nameWrapper}>
                                <p className={css.detailType}>{beer.type}</p>
                                {['Arsenal', 'Boentje'].includes(beer.name) ? (
                                    <img src='/tapBeer.svg' className='w-12 lg:w-16' />
                                ) : null}
                            </div>
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
                    {beerImgJsx(beer.name)}
                    <div className={css.beerInfoContent}>
                        <h1>{beer.name}</h1>
                        <div className={css.nameWrapper}>
                            <p className={css.detailType}>{beer.type}</p>
                            {['Arsenal', 'Boentje'].includes(beer.name) ? (
                                <img src='/tapBeer.svg' className='w-12 lg:w-32 lg:-mt-12' />
                            ) : null}
                        </div>
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
