import React from 'react';

import GlobalState from '@context/globalState';
import { MENU_PAGE } from '@lib/constants';
import * as lib from '@lib/graphql';
import * as type from '@lib/types';

import Beers from '@components/beers';
import Layout from '@components/layout';

const Home = () => {
    const { data, setData } = React.useContext(GlobalState);

    React.useEffect(() => {
        getData();
    }, [data]);

    const getData = async () => {
        try {
            const activeEdition: type.Edition = await lib.getActiveEdition();
            const beers: [type.Beers] = await lib.getBeers(activeEdition);
            const routes: [type.Routes] = await lib.getRoutes(activeEdition);
            const questions: [type.Questions] = await lib.getQuestions(activeEdition);

            setData({
                edition: activeEdition,
                beers: beers,
                routes: routes,
                questions: questions,
            });
        } catch (error) {
            console.error(error); // TODO
        }
    };

    return (
        <Layout title='La Carte' activePage={MENU_PAGE}>
            <Beers />
        </Layout>
    );
};

export default Home;
