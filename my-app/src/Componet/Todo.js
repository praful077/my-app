import { useState} from "react";
import ListItem from './Listitem';
export default function Todo(){
    const [todo, setTodo] = useState("");
    const [todoList , setTodoList] = useState([]);

    const handelChange =(event) =>{
        setTodo(event.target.value);
        //console.log(todo);

    };
    const handleSubmit =(event) =>{
        event.preventDefault();
        let tempList= todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");
    }


    return ( 
        <div> 
           <form onSubmit={handleSubmit}>
            <input value={todo} onChange={handelChange} type="text"></input>
            <button type="submit">Add</button>
           </form>
           {todoList.map((item) =>(
             <ListItem key={item} name={item}></ListItem>
           ))}
         </div>
    );
}