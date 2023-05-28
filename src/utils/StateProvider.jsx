import {createContext, useContext, useReducer} from 'react';

export const Context = createContext();

export const StateProvider = ({children, initial, reducer}) => (
    <Context.Provider value={useReducer(reducer, initial)}>
        {children}
    </Context.Provider>
);

export const useStateProvider = () => useContext(Context);