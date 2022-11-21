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
        document.addEventListener('contextmenu', (e) => {
              e.preventDefault();
            });
    }, []);

    const getData = async () => {
        // TODO Error Management
        const activeEdition: type.Edition = await lib.getActiveEdition();
        const beers: [type.Beers] = await lib.getBeers(activeEdition);
        const routes: [type.Routes] = await lib.getRoutes(activeEdition);
        const questions: [type.Questions] = await lib.getQuestions(activeEdition);

        saveData({
            activeEdition: activeEdition.name,
            beers: beers,
            routes: routes,
            questions: questions,
        });
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
