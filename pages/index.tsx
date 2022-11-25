import React from 'react';

import GlobalState from '@context/globalState';
import { MENU_PAGE } from '@lib/constants';
import { defaultBeer } from '@lib/defaultValue';

import BeersList from '@components/beersList';
import Layout from '@components/layout';
import BeerDetails from '@components/beerDetails';
import { Beers } from '@lib/types';

const Home = () => {
    const { data } = React.useContext(GlobalState);
    const [selectedBeer, setSelectedBeer] = React.useState<Beers>(defaultBeer);

    return (
        <Layout title='La Carte' activePage={MENU_PAGE}>
            {selectedBeer !== defaultBeer ? (
                <BeerDetails beer={selectedBeer} close={() => setSelectedBeer(defaultBeer)} />
            ) : (
                <BeersList beers={data.beers} clickHandler={setSelectedBeer} />
            )}
        </Layout>
    );
};

export default Home;
