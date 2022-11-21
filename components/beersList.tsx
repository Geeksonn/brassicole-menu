import Image from 'next/image';
import React from 'react';

import { Beers } from '@lib/types';

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

type BeersListProps = {
    beers: Beers[];
    clickHandler: any; // TODO 'any'
};

const Beer: React.FunctionComponent<BeerCardProps> = ({ beer, clickHandler }: BeerCardProps) => {
    const beerImgClass = ['Arsenal', 'Frambo', 'Witlab'].includes(beer.name) ? 'w-16' : 'w-10';
    
    return (
        <div className={css.container} onClick={clickHandler}>
            <div className={css.imgContainer}>
                <img src={process.env.NEXT_PUBLIC_IMG_CDN + beer.imageCard + '/'} className={beerImgClass} />
            </div>
            <div className={css.infoContainer}>
                <h2>{beer.name}</h2>
                <p className={css.type}>{beer.type}</p>
                <div className='flex mt-4'>
                    <div className={css.dataContainer}>{`${beer.degree} %`}</div>
                    <div className={css.dataContainer}>{`IBU ${beer.ibu}`}</div>
                </div>
            </div>
        </div>
    );
};

const BeersList: React.FunctionComponent<BeersListProps> = ({ beers, clickHandler }: BeersListProps) => {
    return (
        <div className={css.wrapper}>
            {beers ? (
                beers.map((beer) => {
                    const beerInfo: BeerInfo = {
                        name: beer.name,
                        imageCard: beer.imageCard,
                        degree: beer.degree,
                        ibu: beer.ibu,
                        type: beer.type,
                        description: beer.description,
                    };
                    return <Beer key={beer._id} beer={beerInfo} clickHandler={() => clickHandler(beer)} />;
                })
            ) : (
                <p>No beers ...</p>
            )}
        </div>
    );
};

export default BeersList;
