import { useState } from "react";
import CounterContext from "./CounterContext";

// 3- Creating our provider
const CounterProvider = ({ children }) => {

    // Our logic code:
    const [counter, setCounter] = useState(0)

    // To increment
    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    // To decrement
    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <CounterContext.Provider value={{ counter, handleIncrement, handleDecrement }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;