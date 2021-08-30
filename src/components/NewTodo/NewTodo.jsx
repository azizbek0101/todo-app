import { useImperativeHandle } from "react"
import "./NewTodo.css"

function NewTodo ( {todo, removeTask, handleToggle} ) {
    return (
        <li
            key={todo.id}
            className={todo.is_complated ? "todo-item" : "uncomplete"}
         >
             <input type="checkbox"
                id={todo.id} 
                checked={todo.is_complated}
                onChange={ (e) => handleToggle(Number(e.currentTarget.id))
                }
             />
            {
                <p className="text">
                    {
                        todo.todo_name
                    }
                </p>
            }
            <button
                className="btn"
                onClick={() => removeTask(todo.id)}
            >Delete</button>
        </li>
    )
}

export default NewTodo