import TodoApp from "./TODOApp";
const TODOList = ({todoList,setTodoList}) =>{
    return(
        <div >
           
            {todoList.map((todoItem) =>(
                <TodoApp setTodoList={setTodoList} key={todoItem.id} todoItem = {todoItem} todoList={todoList}></TodoApp>

            ))}

        </div>
    )
}

export default TODOList;