import React from 'react';

import Image from 'next/image';

import { roseEllips, roseLine, yellowEllips, yellowLine } from './routeCardDecoration';
import css from '@styles/routes.module.css';
import { ACCENT_PINK } from '@lib/constants';

type RouteCardProps = {
    accent: string;
    first?: boolean;
    last?: boolean;
    name?: string;
    type?: string;
    degree?: number;
    ibu?: number;
};

const RouteCard: React.FunctionComponent<RouteCardProps> = (props: RouteCardProps) => {
    const ellips = props.accent === ACCENT_PINK ? roseEllips : yellowEllips;
    const line = props.accent === ACCENT_PINK ? roseLine : yellowLine;
    const wrapperClass = `flex ${(props.first ? `mt-7` : ``)}`;

    return (
        <div className={wrapperClass}>
            <div className='flex flex-col items-center'>
                <i>{ellips}</i>
                {props.last ? null : <i>{line}</i>}
            </div>
            <div className={css.routeCard}>
                <div className='mx-3'>
                    <Image src='/beer_cropped.png' width='19px' height='76px' />
                </div>
                <div className={css.beerInfo}>
                    <h3>{props.name}</h3>
                    <p className={css.beerType}>{props.type}</p>
                    <div className='flex'>
                        <div className={css.dataContainer}>{`${props.degree}%`}</div>
                        <div className={css.dataContainer}>{`IBU ${props.ibu}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RouteCard;
