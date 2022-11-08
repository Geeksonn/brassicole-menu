import React from 'react';

import { Beers, Routes } from '@lib/types';
import { ACCENT_ORANGE, ACCENT_PINK } from '@lib/constants';

import RouteTitle from './routeTitle';
import RouteCard from './routeCard';

import css from '@styles/routes.module.css';
import { leftArrowIcon, rightArrowIcon } from './icons';

type RouteListMobileProps = {
    routes: Routes[];
    beers: Beers[];
};

const RouteListMobile: React.FunctionComponent<RouteListMobileProps> = ({ routes, beers }) => {
    const [displayFirstRoute, setDisplayFirstRoute] = React.useState(true);

    const buildRouteTitle = (routeNr: string, accent: string, route: Routes) => {
        const arrowClass = `${css.routeNav} ` + (accent === ACCENT_PINK ? `bg-pink` : `bg-orange`);

        return (
            <div className='flex justify-evenly'>
                {!displayFirstRoute ? (
                    <i className={arrowClass} onClick={() => setDisplayFirstRoute(true)}>
                        {leftArrowIcon}
                    </i>
                ) : null}
                <RouteTitle accent={accent} number={routeNr} title={route.name} />
                {displayFirstRoute ? (
                    <i className={arrowClass} onClick={() => setDisplayFirstRoute(false)}>
                        {rightArrowIcon}
                    </i>
                ) : null}
            </div>
        );
    };

    const buildRoute = () => {
        const accent = displayFirstRoute ? ACCENT_PINK : ACCENT_ORANGE;
        const routeNr = displayFirstRoute ? '01' : '02';
        const route = displayFirstRoute ? routes[0] : routes[1];
        let jsx = [];

        jsx.push(buildRouteTitle(routeNr, accent, route));

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
            <div className={css.routesListWrapper}>{routes.length > 0 ? buildRoute() : <></>}</div>
        </div>
    );
};

export default RouteListMobile;
