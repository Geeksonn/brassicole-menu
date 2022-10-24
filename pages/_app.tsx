import React from 'react';

import type { AppProps } from 'next/app';

import GlobalState from '../context/globalState';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const [data, setData] = React.useState({});
    const context = { data, setData };

    return (
        <GlobalState.Provider value={context}>
            <Component {...pageProps} />
        </GlobalState.Provider>
    );
}

export default MyApp;
