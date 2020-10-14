//we need to track the basket
import React,{createContext, useContext, useReducer} from "react";

//This is the data Layer
export const StateContext = createContext();

//Build provider
export const StateProvider = ({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//Usage inside a component
export const useStateValue = () => useContext(StateContext);