import React from 'react';

type GlobalStateType = {
    data: Object;
    setData: React.Dispatch<React.SetStateAction<{}>>;
};

const GlobalState = React.createContext<GlobalStateType>({
    data: {},
    setData: () => {},
});

export default GlobalState;
