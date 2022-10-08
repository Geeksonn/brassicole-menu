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
            <div className={css.flexRow}>
                <h1 className={css.title}>{props.name}</h1>
                <p className={css.info}>
                    {props.degree} % - {props.ibu} IBU
                </p>
            </div>
            <div className={css.description}>{props.description}</div>
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