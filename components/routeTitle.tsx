import React from 'react';

import css from '@styles/routes.module.css';
import { ACCENT_PINK } from '@lib/constants';

type RouteTitleProps = {
    accent: string;
    number: string;
    title: string;
};

const RouteTitle: React.FunctionComponent<RouteTitleProps> = ({ accent, number, title }: RouteTitleProps) => {
    let titleClass = `${css.routeTitle} `;
    titleClass = titleClass + (accent === ACCENT_PINK ? `bg-pink` : `bg-orange`);

    return (
        <div className={titleClass}>
            <div className={css.routeNumber}>{number}</div>
            <div className='flex flex-col'>
                <p className='text-xs text-white'>Route</p>
                <p className={css.routeName}>{title}</p>
            </div>
        </div>
    );
};

export default RouteTitle;
