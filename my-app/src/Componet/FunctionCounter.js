import {useState} from "react";
function FunctionCounter(){
    const [counter, SetCounter] = useState(2);

    const increment = () => {
        SetCounter(counter *3);
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