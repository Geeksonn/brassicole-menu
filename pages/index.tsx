import React from 'react';
import Banner from '../components/banner';
import Filters from '../components/filters';
import Beers from '../components/beers';

const Home = () => {
    return (
        <div className='flex flex-col'>
            <Banner />
            <Filters />
            <Beers />
        </div>
    );
};

export default Home;
