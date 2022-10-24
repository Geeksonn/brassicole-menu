import React from 'react';

import GlobalState from '@context/globalState';
import { MENU_PAGE } from '@lib/constants';

import BeersList from '@components/beersList';
import Layout from '@components/layout';

const Home = () => {
    const { data } = React.useContext(GlobalState);

    return (
        <Layout title='La Carte' activePage={MENU_PAGE}>
            <BeersList beers={data.beers} />
        </Layout>
    );
};

export default Home;
