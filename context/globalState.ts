import React from 'react';

import * as type from '@lib/types';

export type Data = {
    activeEdition: string;
    beers: type.Beers[];
    routes: type.Routes[];
    questions: type.Questions[];
};

type GlobalStateType = {
    data: Data;
    //setData: React.Dispatch<React.SetStateAction<Data>>;
    saveData: (data: Data) => void;
};

const GlobalState = React.createContext<GlobalStateType>({
    data: {
        activeEdition: '',
        beers: [],
        routes: [],
        questions: [],
    },
    saveData: (data: Data) => {},
});
/*
const GlobalState = React.createContext<GlobalStateType | null>({
    data: {},
    setData: () => {},
});
*/

export default GlobalState;
