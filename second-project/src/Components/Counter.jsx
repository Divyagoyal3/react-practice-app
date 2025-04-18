import React from 'react'
import usecounter from './usecounter'
const Counter = () => {
    const { count, increment, decrement, reset } = usecounter(5);
    return (
        <div>
            <h3>Count  {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
