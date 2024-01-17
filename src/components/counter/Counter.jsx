import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            
            <h1>{counter}</h1>
            <button onClick={() => increment(counter, setCounter)}>+1</button>
            <button onClick={() => reset(setCounter)}>Reset</button>
            <button onClick={() => decrement(counter, setCounter)}>-1</button>
        </>
    );
};

const increment = (counter, setCounter) => {
    // console.log(counter + 1);
    setCounter(counter + 1);
}

const reset = (setCounter) => {
    setCounter(0);
}

const decrement = (counter, setCounter) => {
    setCounter(counter - 1);
}

export default Counter;