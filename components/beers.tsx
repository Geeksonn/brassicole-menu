import Image from 'next/image';
import React from 'react';

import css from '../styles/beers.module.css';

type Props = {
    name: string;
    degree: number;
    ibu: number;
    type: string;
    description: string;
};

const Beer: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <div className={css.container}>
            <div className='-mt-8'>
                <Image src='/beer_cropped.png' width='28' height='114' />
            </div>
            <div className={css.infoContainer}>
                <h2>{props.name}</h2>
                <p className={css.type}>{props.type}</p>
                <div className='flex mt-4'>
                    <div className={css.dataContainer}>{`${props.degree} %`}</div>
                    <div className={css.dataContainer}>{`IBU ${props.ibu}`}</div>
                </div>
            </div>
        </div>
    );
};

const Beers: React.FunctionComponent = () => {
    return (
        <div className={css.wrapper}>
            <Beer name='Ardenne Triple' degree={8} ibu={12} type='Triple' description='Lorem Ipsum ...' />
            <Beer name='Ardenne Triple' degree={8} ibu={12} type='Triple' description='Lorem Ipsum ...' />
            <Beer name='Ardenne Triple' degree={8} ibu={12} type='Triple' description='Lorem Ipsum ...' />
            <Beer name='Ardenne Triple' degree={8} ibu={12} type='Triple' description='Lorem Ipsum ...' />
            <Beer name='Ardenne Triple' degree={8} ibu={12} type='Triple' description='Lorem Ipsum ...' />
        </div>
    );
};

export default Beers;
