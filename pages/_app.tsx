import React from 'react';

import type { AppProps } from 'next/app';

import GlobalState, { Data } from '@context/globalState';
import * as type from '@lib/types';
import * as lib from '@lib/graphql';

import '@styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const [data, setData] = React.useState<Data>({
        activeEdition: '',
        beers: [],
        routes: [],
        questions: [],
    });

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const activeEdition: type.Edition = await lib.getActiveEdition();
            const beers: [type.Beers] = await lib.getBeers(activeEdition);
            const routes: [type.Routes] = await lib.getRoutes(activeEdition);
            const questions: [type.Questions] = await lib.getQuestions(activeEdition);

            /*
            setData({
                activeEdition: activeEdition.name,
                beers: beers,
                routes: routes,
                questions: questions,
            });*/
            saveData({
                activeEdition: activeEdition.name,
                beers: beers,
                routes: routes,
                questions: questions,
            });
        } catch (error) {
            console.error(error); // TODO
        }
    };

    const saveData = (data: Data) => {
        setData(data);
    };

    return (
        <GlobalState.Provider value={{ data, saveData }}>
            <Component {...pageProps} />
        </GlobalState.Provider>
    );
}

export default MyApp;
