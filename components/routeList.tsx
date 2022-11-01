import React from 'react';

import { ACCENT_ORANGE, ACCENT_PINK } from '@lib/constants';
import { Routes, Beers } from '@lib/types';

import RouteTitle from './routeTitle';
import RouteCard from './routeCard';

import css from '@styles/routes.module.css';

type RouteListProps = {
    routes: Routes[];
    beers: Beers[];
};

const RouteList: React.FunctionComponent<RouteListProps> = ({ routes, beers }) => {
    const buildRoute = (routeNr: number, accent: string) => {
        const routeNrStr = '0' + routeNr;
        const route = routes[routeNr - 1];
        let jsx = [];

        jsx.push(
            <RouteTitle key={`title_${routeNrStr}`} accent={accent} number={routeNrStr} title={route.name} />
        );

        route.beers.forEach((beer, index) => {
            const first = index === 0;
            const last = index === route.beers.length - 1;

            const beerObj = beers.find((b) => b.name === beer.name);
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
        <div className={css.routesContainer}>
            <div className={css.routesListWrapper}>{routes.length > 0 ? buildRoute(1, ACCENT_PINK) : <></>}</div>
            <div className={css.routesListWrapper}>{routes.length > 1 ? buildRoute(2, ACCENT_ORANGE) : <></>}</div>
        </div>
    );
};

export default RouteList;
