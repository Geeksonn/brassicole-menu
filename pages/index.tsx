import React from 'react';
import Beers from '../components/beers';
import Layout from '../components/layout';
import { MENU_PAGE } from '../lib/constants';

const Home = () => {
    return (
        <Layout title='La Carte' activePage={MENU_PAGE}>
            <Beers />
        </Layout>
    );
};

export default Home;
