import React from 'react';

import type { AppProps } from 'next/app';

import GlobalState from '@context/globalState';
import * as type from '@lib/types';
import * as lib from '@lib/graphql';

import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const [data, setData] = React.useState({});
    const context = { data, setData };

    React.useEffect(() => {
        getData();
    }, []);

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
        <GlobalState.Provider value={context}>
            <Component {...pageProps} />
        </GlobalState.Provider>
    );
}

export default MyApp;
