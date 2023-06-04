import './App.css';
//import Demo1 from './Componet/Demo';
import Demo from './Componet/hello';
import Message from './Componet/Message';
import Counter from './Componet/Counter';
import FunctionEvent from './Componet/FunctionEvent';
import FunctionCounter from './Componet/FunctionCounter';
function App() {
  return (
    <div className="App">

      <Demo name="ravi22"></Demo>
      <Message name="ravi3" messageconten="This is a message of  props "/>
      <Counter></Counter>

      <FunctionEvent></FunctionEvent>
      <br>
      </br>
      <FunctionCounter></FunctionCounter>

      
    
    </div>
  );
}

export default App;
