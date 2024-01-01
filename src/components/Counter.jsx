import React, { useContext } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

import styled from 'styled-components'
import CounterContext from '../context/CounterContext';

const WrapperCounter = styled.div`
    height: 100vh;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #191919;
`;

const Container = styled.div`
    width: 600px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
    box-shadow: 10px 10px 5px #40413d;
`;

const Button = styled.button`
    width: 70px;
    height: 40px;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
    border-radius: 8px;
    &:hover{
        background-color: #3559E0;
    }
`;

const CounterSection = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 15px;
    padding: 20px;
`;


const ResultCounter = styled.div`
    font-weight: bolder;
    font-size: 34px;

`;

const Counter = () => {

    // 5- Call context using useContext hook
    const { counter, handleIncrement, handleDecrement } = useContext(CounterContext)

    return (
        <WrapperCounter>
            <Container>
                <CounterSection>
                    <ResultCounter> {counter} </ResultCounter>
                </CounterSection>

                <div>
                    <Button onClick={handleIncrement} > <FaPlus /> </Button>
                    <Button onClick={handleDecrement} > <FaMinus /> </Button>
                </div>
            </Container>
        </WrapperCounter>
    )
}

export default Counter