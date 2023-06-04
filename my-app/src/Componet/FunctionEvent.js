function FunctionEvent(){
    function handleclick(){
        console.log("Button 2")
    }
 

    return(
        <div>
            Function component

            <button onClick={handleclick}>Click here</button>

        </div>
    );
}

export default FunctionEvent;