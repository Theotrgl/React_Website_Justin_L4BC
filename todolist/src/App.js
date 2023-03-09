import React, {useState, /*useEffect*/} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import './App.css';

const App= ()=>{
  const[Input, setInput] = useState("");
  const[todos, setTodos] = useState([/*initialState*/]);
  const[editTodo, setEditTodo] = useState(null);

  return(
    <div class="container">
      <div class="wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form input={Input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        </div>
        <div>
          <Todo todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
};

export default App;
