import React from 'react';

import css from '../styles/filters.module.css';

type Props = {
    name: string;
};

const Filter: React.FunctionComponent<Props> = ({ name }: Props) => {
    return (
        <div className={css.filter}>{name}</div>
    );
};

const Filters: React.FunctionComponent = () => {
    return (
        <div className={css.filters}>
            <Filter name='Blonde' />
            <Filter name='Triple' />
            <Filter name='Brune' />
            <Filter name='Ambrée' />
            <Filter name='Saison' />
        </div>
    );
};

export default Filters;
