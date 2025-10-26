import React from 'react';

import { Beer } from '@/types';

import BeerCard from './beerCard';

type Props = {
    beers: Beer[];
};

const BeersList: React.FunctionComponent<Props> = ({ beers }) => {
    return (
        <div className='flex flex-wrap justify-evenly px-4 -mt-14'>
            {beers
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map((beer) => (
                    <BeerCard key={beer.id} {...beer} />
                ))}
        </div>
    );
};

export default BeersList;
