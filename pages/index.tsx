import React from 'react';

import GlobalState, { Data } from '@context/globalState';
import { MENU_PAGE } from '@lib/constants';
import { defaultBeer } from '@lib/defaultValue';

import BeersList from '@components/beersList';
import Layout from '@components/layout';
import BeerDetails from '@components/beerDetails';
import { Beers } from '@lib/types';
import * as type from '@lib/types';
import * as lib from '@lib/graphql';

type HomeProps = {
    menuData: Data;
};

export const getStaticProps = async () => {
    // TODO Error Management
    const activeEdition: type.Edition = await lib.getActiveEdition();
    const beers: [type.Beers] = await lib.getBeers(activeEdition);
    const routes: [type.Routes] = await lib.getRoutes(activeEdition);
    const questions: [type.Questions] = await lib.getQuestions(activeEdition);

    return {
        props: {
            menuData: {
                activeEdition: activeEdition.name,
                beers: beers,
                routes: routes,
                questions: questions,
            },
        },
    };
};

const Home = ({ menuData }: HomeProps) => {
    const { data, saveData } = React.useContext(GlobalState);
    const [selectedBeer, setSelectedBeer] = React.useState<Beers>(defaultBeer);

    React.useEffect(() => {
        saveData(menuData);
    }, []);

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
