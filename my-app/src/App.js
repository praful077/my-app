import './App.css';

//import Demo1 from './Componet/Demo';
//import Demo from './Componet/hello';
//import Message from './Componet/Message';
//import Counter from './Componet/Counter';
//import FunctionEvent from './Componet/FunctionEvent';
//import FunctionCounter from './Componet/FunctionCounter';
//import ConditionalComponent from './Componet/ConditionalComponent';
//import Product from './Componet/Product';
//import Form from './Componet/Form';
//import Todo from './Componet/Todo';
//import InlineComponent from './Componet/InlineComponent';
//import StyleSheetComponent from './Componet/StyleSheetComponent';
//import ModulComponent from './Componet/ModulComponent';
import HeaderTodo from './Componet/TODOHeader';
import TODOForm from './Componet/TODOForm';
import { useState } from 'react';
//import TodoApp from './Componet/TODOApp';
import TODOList from './Componet/TODOList';

function App() {
  const [todo,setTodo] = useState('');
  const [todoList,setTodoList] = useState([]);
  
  return (
    <div className="App">
      <HeaderTodo></HeaderTodo>
      <TODOForm todo={todo} setTodo={setTodo} todoList={todoList} 
      setTodoList={setTodoList}>
      </TODOForm>
     
      <TODOList setTodoList={setTodoList} todoList={todoList}></TODOList>
     



    </div>
  );
}

export default App;
