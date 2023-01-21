import React from 'react';

import type { AppProps } from 'next/app';

import GlobalState, { Data } from '@context/globalState';

import '@styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    const [data, setData] = React.useState<Data>({
        activeEdition: '',
        beers: [],
        routes: [],
        questions: [],
    });

    React.useEffect(() => {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }, []);

    const saveData = (data: Data) => {
        setData(data);
    };

    return (
        <GlobalState.Provider value={{ data, saveData }}>
            <Head>
                <title>Carte de la Brassicole</title>
            </Head>
            <Component {...pageProps} />
        </GlobalState.Provider>
    );
}

export default MyApp;
