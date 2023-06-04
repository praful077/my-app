import {Component} from "react";
class Message extends Component {
    render(){

        const {name} = this.props
        return <h1>Message {name} : {this.props.messageconten}</h1>
    }
}


export default Message;