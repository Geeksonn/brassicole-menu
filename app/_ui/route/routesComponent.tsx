'use client';

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Beer, Route, RouteBeers } from '@/types';
import { ACCENT_PINK, ACCENT_ORANGE, ACCENT_GREEN } from '@/_ui/constants';
import RouteList from '@/_ui/route/routeList';
import { RouteNextIcon, RoutePrevIcon } from '../icons';

const ACCENTS = [ACCENT_PINK, ACCENT_ORANGE, ACCENT_GREEN];

type Props = {
    routes: Route[];
    routeBeers: RouteBeers[];
    beers: Beer[];
};

/** URL of a route, 0-based index -> `/routes?route=N` (1-based, as displayed). */
const routeHref = (index: number) => `/routes?route=${index + 1}`;

/**
 * Renders one route. The displayed route lives in the URL (`?route=N`), so going
 * back from a beer page lands on the route the visitor was looking at.
 * Prev/next replace the history entry instead of pushing one, so "back" does not
 * step through the routes.
 */
export const RoutesView: React.FC<Props & { routeDisplayed: number }> = ({
    routes,
    routeBeers,
    beers,
    routeDisplayed,
}) => {
    if (!routes || routes.length <= 0 || !beers || beers.length <= 0) {
        return <p>Aucune donnée</p>;
    }

    const accent = ACCENTS[routeDisplayed];
    const isFirst = routeDisplayed === 0;
    const isLast = routeDisplayed === routes.length - 1;

    return (
        <div className='flex items-start justify-evenly'>
            {isFirst ? (
                <div>
                    <RoutePrevIcon accent={accent} disabled />
                </div>
            ) : (
                <Link href={routeHref(routeDisplayed - 1)} replace scroll={false}>
                    <RoutePrevIcon accent={accent} disabled={false} />
                </Link>
            )}
            <RouteList
                accent={accent}
                routeNr={`0${routeDisplayed + 1}`}
                route={routes[routeDisplayed]}
                routeBeers={routeBeers.filter((r) => r.route === routes[routeDisplayed].id)}
                beers={beers}
            />
            {isLast ? (
                <div>
                    <RouteNextIcon accent={accent} disabled />
                </div>
            ) : (
                <Link href={routeHref(routeDisplayed + 1)} replace scroll={false}>
                    <RouteNextIcon accent={accent} disabled={false} />
                </Link>
            )}
        </div>
    );
};

/** Reads the displayed route from `?route=N`; missing or invalid values fall back to the first route. */
const RoutesComponent: React.FC<Props> = (props) => {
    const searchParams = useSearchParams();
    const requested = Number(searchParams.get('route'));
    const routeDisplayed =
        Number.isInteger(requested) && requested >= 1 && requested <= props.routes.length ? requested - 1 : 0;

    return <RoutesView {...props} routeDisplayed={routeDisplayed} />;
};

export default RoutesComponent;
