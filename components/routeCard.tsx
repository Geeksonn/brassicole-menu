import React from 'react';

import { roseEllips, roseLine, yellowEllips, yellowLine } from './routeCardDecoration';
import css from '@styles/routes.module.css';
import { ACCENT_PINK, BEER_BIGGER_IMG } from '@lib/constants';
import BeerCard from './beerCard';

type RouteCardProps = {
    accent: string;
    first?: boolean;
    last?: boolean;
    name?: string;
    type?: string;
    imageCard?: string;
    degree?: number;
    ibu?: number;
};

const RouteCard: React.FunctionComponent<RouteCardProps> = (props: RouteCardProps) => {
    const ellips = props.accent === ACCENT_PINK ? roseEllips : yellowEllips;
    const line = props.accent === ACCENT_PINK ? roseLine : yellowLine;
    const wrapperClass = `flex ${(props.first ? `mt-20` : `-mt-10`)}`;
    
    const beerInfo = {
        name: props.name || '',
        imageCard: props.imageCard || '',
        degree: props.degree || 0,
        ibu: props.ibu || 0,
        type: props.type || '',
        description: ''
    };

    return (
        <div className={wrapperClass}>
            <div className='flex flex-col items-center'>
                <i>{ellips}</i>
                {props.last ? null : <i>{line}</i>}
            </div>
            <BeerCard beer={beerInfo} clickHandler={() => {}} />
            {/*}
            <div className={css.routeCard}>
                <div className='mx-3'>
                    {/*<Image src={imgSrc} width='19px' height='76px' />
                    <img src={imgSrc} className={beerImgClass} />
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
            */}
        </div>
    );
};

export default RouteCard;
