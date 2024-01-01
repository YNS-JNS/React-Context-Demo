import { useReducer, useState } from "react";
import CounterContext from "./CounterContext";
import counterReducer from "./counterReducer";

// 3- Creating our provider
const CounterProvider = ({ children }) => {

    // Our logic code:
    const initState = {
        counter: 0,
    }

    const [state, dispatch] = useReducer(counterReducer, initState)

    
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;