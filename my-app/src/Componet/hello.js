const name2 = "Praful"
const DisplayMessage = () =>{
    return "I need help!"
};

function Demo(props){

    const {name} = props;
    return <h>Hello {name} World! {name2} Total is {10+101} , the message is : {DisplayMessage()} </h>;
}
export default Demo;