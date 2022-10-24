import Image from 'next/image';
import React from 'react';

import { Beers } from '@lib/types';

import css from '@styles/beers.module.css';

type BeerInfo = {
    name: string;
    degree: number;
    ibu: number;
    type: string;
    description: string;
};

type BeerCardProps = {
    beer: BeerInfo;
};

type BeersListProps = {
    beers: [Beers] | undefined;
};

const Beer: React.FunctionComponent<BeerCardProps> = ({ beer }: BeerCardProps) => {
    return (
        <div className={css.container}>
            <div className='-mt-8'>
                <Image src='/beer_cropped.png' width='28' height='114' />
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

const BeersList: React.FunctionComponent<BeersListProps> = ({ beers }: BeersListProps) => {
    return (
        <div className={css.wrapper}>
            {beers ? (
                beers.map((beer) => {
                    const beerInfo: BeerInfo = {
                        name: beer.name,
                        degree: beer.degree,
                        ibu: beer.ibu,
                        type: beer.type,
                        description: beer.description,
                    };
                    return <Beer key={beer._id} beer={beerInfo} />;
                })
            ) : (
                <p>No beers ...</p>
            )}
        </div>
    );
};

export default BeersList;
