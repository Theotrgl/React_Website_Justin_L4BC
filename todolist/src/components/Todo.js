import React from "react";

const Todo = ({todos, setTodos, setEditTodo}) => {

    const Complete = (todo) =>{
        setTodos(
            todos.map((item)=>{
                if(item.id ===todo.id){
                    return{...item,completed: !item.completed};
                }
                return item;
            })
        );
    };

    const Edit = ({id}) =>{
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    const Delete = ({id}) => {
        setTodos(todos.filter((todo)=> todo.id !== id));
    };

    return(
        <div>
            {todos.map((todo)=>(
                <li class="item_list" key={todo.id}>
                    <input type="text" value={todo.title} class={`list ${todo.completed ? "complete" : ""}`} onChange={(event)=> event.preventDefault()}/>
                    <div>
                        <button class="Complete" onClick={()=>Complete(todo)}>
                            <i class="Check"></i>
                        </button>

                        <button class="Edit" onClick={()=>Edit(todo)}>
                            <i class="edit"></i>
                        </button>

                        <button class="Delete" onClick={()=> Delete(todo)}>
                            <i class="delete"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Todo;