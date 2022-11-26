import React from 'react';

import { BEER_BIGGER_IMG } from '@lib/constants';

import css from '@styles/beers.module.css';

type BeerInfo = {
    name: string;
    imageCard: string;
    degree: number;
    ibu: number;
    type: string;
    description: string;
};

type BeerCardProps = {
    beer: BeerInfo;
    clickHandler: any; // TODO 'any'
};

const BeerCard: React.FunctionComponent<BeerCardProps> = ({ beer, clickHandler }: BeerCardProps) => {
    const beerImgClass = BEER_BIGGER_IMG.includes(beer.name) ? 'w-16' : 'w-10';

    return (
        <div className={css.container} onClick={clickHandler}>
            <div className={css.imgContainer}>
                <img src={process.env.NEXT_PUBLIC_IMG_CDN + beer.imageCard + '/'} className={beerImgClass} />
            </div>
            <div className={css.infoContainer}>
                <div className={css.nameWrapper}>

                <h2>{beer.name}</h2>
                {['Arsenal', 'Boentje'].includes(beer.name) ? (
                                <img src='/tapBeer.svg' className='w-12 lg:w-32 lg:-mt-12' />
                            ) : null}
                </div>
                <p className={css.type}>{beer.type}</p>
                <div className='flex mt-4'>
                    <div className={css.dataContainer}>{`${beer.degree} %`}</div>
                    <div className={css.dataContainer}>{`IBU ${beer.ibu}`}</div>
                </div>
            </div>
        </div>
    );
};

export default BeerCard;
