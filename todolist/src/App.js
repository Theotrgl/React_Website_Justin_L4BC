import React, {useState, /*useEffect*/} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todo from "./components/Todo";
import './App.css';

const App= ()=>{
  const[input, setInput] = useState("");
  const[todos, setTodos] = useState([/*initialState*/]);
  const[editTodo, setEditTodo] = useState(null);

  document.title = "To Do List";

  return( 
    <div class="container">
      <Header/>
        <div class="wrapper">
          <div class="forms">
            <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
          </div>
          <div class="list">
            <Todo todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
          </div>
        </div>
      </div>
  );
};

export default App;
