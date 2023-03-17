import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import React, {useState, useEffect} from "react";

const Main = ()=>{

const[input, setInput] = useState("");
const[todos, setTodos] = useState([/*initialState*/]);
const[editTodo, setEditTodo] = useState(null);

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
}

export default Main;