import React from 'react';
import Layout from '@components/layout';
import { ACCENT_ORANGE, ACCENT_PINK, ROUTES_PAGE } from '@lib/constants';
import { Routes } from '@lib/types';

import RouteCard from '@components/routeCard';
import RouteTitle from '@components/routeTitle';
import GlobalState from '@context/globalState';

import css from '@styles/routes.module.css';

const Routes = () => {
    const { data } = React.useContext(GlobalState);

    const buildRouteJsx = (routeNr: string, accent: string, route: Routes) => {
        let jsx = [<RouteTitle key={`title_${routeNr}`} accent={accent} number={routeNr} title={route.name} />];
        route.beers.forEach((beer, index) => {
            const first = index === 0;
            const last = index === route.beers.length - 1;

            const beerObj = data.beers.find((b) => b.name === beer.name);
            jsx.push(
                <RouteCard
                    key={`route_${routeNr}_${index}`}
                    accent={accent}
                    first={first}
                    last={last}
                    name={beerObj?.name}
                    type={beerObj?.type}
                    degree={beerObj?.degree}
                    ibu={beerObj?.ibu}
                />
            );
        });

        return jsx;
    };

    return (
        <Layout title='Nos routes' activePage={ROUTES_PAGE}>
            <div className={css.routesContainer}>
                <div className={css.routesListWrapper}>
                    {data.routes.length > 0 ? buildRouteJsx('01', ACCENT_PINK, data.routes[0]) : <></>}
                </div>
                <div className={css.routesListWrapper}>
                    {data.routes.length > 1 ? buildRouteJsx('02', ACCENT_ORANGE, data.routes[1]) : <></>}
                    {/*}
                    <RouteTitle accent={ACCENT_ORANGE} number='01' title='Nom de la route' />
                    <RouteCard accent={ACCENT_ORANGE} first name='Bière' type='Type' degree={5.3} ibu={23} />
                    <RouteCard accent={ACCENT_ORANGE} name='Bière' type='Type' degree={5.3} ibu={23} />
                    <RouteCard accent={ACCENT_ORANGE} name='Bière' type='Type' degree={5.3} ibu={23} />
                    <RouteCard accent={ACCENT_ORANGE} last name='Bière' type='Type' degree={5.3} ibu={23} />
    */}
                </div>
            </div>
        </Layout>
    );
};

export default Routes;
