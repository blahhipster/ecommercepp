import { useState } from "react";
import "./App.css";

function CounterSec(){
    const[counter, setCounter] = useState(0);

    const increase = () =>{
        setCounter(counter+1)
    }

    const decrease = () =>{
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    

    return(
        <div id="fullcounter">
            <button onClick={decrease}>-</button>
            <span id='zero'>{counter}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default CounterSec;