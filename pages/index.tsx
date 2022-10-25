import React from 'react';

import GlobalState from '@context/globalState';
import { MENU_PAGE } from '@lib/constants';

import BeersList from '@components/beersList';
import Layout from '@components/layout';
import BeerDetails from '@components/beerDetails';

const Home = () => {
    const { data } = React.useContext(GlobalState);
    const [selectedBeer, setSelectedBeer] = React.useState({});

    const handleClick = (beer: any) => {
        // TODO 'any'
        setSelectedBeer(beer);
    };

    return (
        <Layout title='La Carte' activePage={MENU_PAGE}>
            {Object.keys(selectedBeer).length > 0 ? (
                <BeerDetails beer={selectedBeer} close={() => setSelectedBeer({})} />
            ) : (
                <BeersList beers={data.beers} clickHandler={setSelectedBeer} />
            )}
        </Layout>
    );
};

export default Home;
