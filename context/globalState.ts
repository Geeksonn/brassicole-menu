import React from 'react';

import * as type from '@lib/types';

type Data = {
    activeEdition?: string;
    beers?: [type.Beers];
    routes?: [type.Routes];
    questions?: [type.Questions];
}

type GlobalStateType = {
    data: Data;
    setData: React.Dispatch<React.SetStateAction<{}>>;
};

const GlobalState = React.createContext<GlobalStateType>({
    data: {},
    setData: () => {},
});

export default GlobalState;
