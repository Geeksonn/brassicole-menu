import React from 'react';
import Layout from '@components/layout';
import { MAX_WIDTH_MOB, ROUTES_PAGE } from '@lib/constants';

import GlobalState from '@context/globalState';

import useMediaQuery from '@components/useMediaQuery';
import RouteList from '@components/routeList';
import RouteListMobile from '@components/routeListMobile';

import css from '@styles/routes.module.css';

const Routes = () => {
    const { data } = React.useContext(GlobalState);
    const isMobile = useMediaQuery(MAX_WIDTH_MOB);

    return (
        <Layout title='Nos routes' activePage={ROUTES_PAGE}>
            {isMobile ? (
                <RouteListMobile routes={data.routes} beers={data.beers} />
            ) : (
                <RouteList routes={data.routes} beers={data.beers} />
            )}
        </Layout>
    );
};

export default Routes;
