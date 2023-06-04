import {useState} from "react";
function FunctionCounter(){
    const [counter, SetCounter] = useState(0);

    const increment = () => {
        SetCounter(counter +1);
    };
    return(
        <div>
            <div>Counter value: {counter}</div>
            <div>
                <button onClick={increment}></button>
            </div>

        </div>
        
    )

};

export default FunctionCounter;