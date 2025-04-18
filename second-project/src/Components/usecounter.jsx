
import {useState} from 'react';

function usecounter (initialvalue =0){
    const [count, setCount] = useState(initialvalue);
    const increment = ()=>{
        setCount((prevCount)=>prevCount+1);
    }
    const decrement = ()=>{
        setCount((prevCount)=>prevCount-1);
    }
    const reset = ()=>{
        setCount(initialvalue);
    }
    return {count, increment, decrement, reset}
}

export default usecounter;