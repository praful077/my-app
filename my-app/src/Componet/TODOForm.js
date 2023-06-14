import styles from "../style.module.css";
import shortid from "shortid";


const TODOForm =({todo,setTodo,todoList,setTodoList})=>{

    const hendleChange =(event) =>{
        setTodo(event.target.value);
        //console.log(todo)
    };
    const handelSubmit =(event) =>{
        event.preventDefault();
        setTodoList([...todoList,{name:todo,id:shortid.generate()}]);
        setTodo("");
        //console.log(todoList);
    }

    return(
        <div className={styles.todoform}>
            <form onSubmit={handelSubmit}>
            <input value={todo} onChange={hendleChange} className={styles.todoinput} placeholder="Add Todo Item"></input>
                <button type="submit" className={styles.todobutton}>Add</button>
            </form>
          
        </div>
    )
}

export default TODOForm;