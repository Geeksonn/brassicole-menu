'use client';

import React from 'react';
import { Beer, Route, RouteBeers } from '@/types';
import { ACCENT_PINK, ACCENT_ORANGE, ACCENT_GREEN } from '@/_ui/constants';
import RouteList from '@/_ui/route/routeList';
import { RouteNextIcon, RoutePrevIcon } from '../icons';

type Props = {
    routes: Route[];
    routeBeers: RouteBeers[];
    beers: Beer[];
};

const RoutesComponent: React.FC<Props> = ({ routes, routeBeers, beers }) => {
    const ACCENTS = [ACCENT_PINK, ACCENT_ORANGE, ACCENT_GREEN];
    const [routeDisplayed, setRouteDisplayed] = React.useState<number>(0);

    if (!routes || RoutesComponent.length <= 0 || !beers || beers.length <= 0) {
        return <p>Aucune donnée</p>;
    }

    const nextRoute = () => {
        if (routeDisplayed < routes.length - 1) {
            setRouteDisplayed(routeDisplayed + 1);
        }
    };

    const previousRoute = () => {
        if (routeDisplayed > 0) {
            setRouteDisplayed(routeDisplayed - 1);
        }
    };


    return (
        <div className='flex items-start justify-evenly'>
            <div onClick={() => previousRoute()}>
                <RoutePrevIcon accent={ACCENTS[routeDisplayed]} disabled={routeDisplayed === 0} />
            </div>
            <RouteList
                accent={ACCENTS[routeDisplayed]}
                routeNr={`0${routeDisplayed + 1}`}
                route={routes[routeDisplayed]}
                routeBeers={routeBeers.filter((r) => r.route === routes[routeDisplayed].id)}
                beers={beers}
            />
            <div onClick={() => nextRoute()}>
                <RouteNextIcon
                    accent={ACCENTS[routeDisplayed]}
                    disabled={routeDisplayed === routes.length - 1}
                />
            </div>
        </div>
    );
};

export default RoutesComponent;
