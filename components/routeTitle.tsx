import React from 'react';

import css from '@styles/routes.module.css';
import { ACCENT_PINK } from '@lib/constants';

type RouteTitleProps = {
    accent: string;
    number: string;
    title: string;
};

const RouteTitle: React.FunctionComponent<RouteTitleProps> = ({ accent, number, title }: RouteTitleProps) => {
    const titleBgClass = accent === ACCENT_PINK ? `bg-pink` : `bg-orange`;

    return (
        <div className={`${css.routeTitle} ${titleBgClass}`}>
            <div className={css.routeNumber}>{number}</div>
            <div className={css.routeNameWrapper}>
                <p className={css.route}>Route</p>
                <p className={css.routeName}>{title}</p>
            </div>
        </div>
    );
};

export default RouteTitle;
