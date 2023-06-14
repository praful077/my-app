import { Component} from "react";

class Form extends Component{
    state = {
        firstname: " ",
        lastname: " ",
    };
    handleLastNameChange=(event)=>{
        this.setState({
            lastname: event.target.value,
        });

    }
    handleChange=(event)=>{
        this.setState({
            firstname: event.target.value,
        })
        //console.log(event.target.value);

    };
    hendleSubmit = (event) => {
        event.preventDefult();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname,
        })

    };
    render(){
        return(
            <div>

           
            Form 
            <form onSubmit={this.hendleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.firstname}></input>
                <input onChange={this.handleLastNameChange} type="text" value={this.state.lastname}></input>
            </form>
            <button type="submit">Submit</button>
            </div>
        );
    }

}

export default Form;