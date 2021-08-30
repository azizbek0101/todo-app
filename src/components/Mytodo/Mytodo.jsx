import {  useState,useEffect, } from 'react';
import './Mytodo.css';
import TodoForm from '../TodoForm/TodoForm';
import NewTodo from '../NewTodo/NewTodo';

function TodoRenderFn () {
    const parsedData = window.localStorage.getItem('todos')
    const [inputData, setData] = useState(parsedData ? JSON.parse(parsedData) : [])

    useEffect( () => {
        window.localStorage.setItem('todos', JSON.stringify(inputData))
    }, [inputData])

    const addTask = event => {
        if (event.keyCode === 13 && event.target.value) {
            let Todo = {
                id: inputData.length ? inputData[0].id + 1 : 1,
                todo_name: event.target.value,
                is_complated: false
            }
            setData([Todo, ...inputData])
            event.target.value = ''
        }
    }

    const removeTask = (id) => {
        setData(inputData.filter( todo => todo.id !== id))
    }

    const handleToggle = (id) => {
        setData(
            inputData.map( todo => {
                if (todo.id === id) {
                    todo.is_complated = !todo.is_complated
                }
                return todo
            })
        )
    }

     return(
         <>
         <div className="container">
            <h1>Your To Do App</h1>
            <h2>All todos: {inputData.length}</h2>
            <div className="fas fa-hamburger"></div>
            <TodoForm
                addTask={addTask}
            />
           {
               inputData.length > 0 && <ul
                className="todo-list"
               >
                   {
                      inputData.map(todo => (
                         <NewTodo 
                            todo={todo}
                            key={todo.id}
                            removeTask={removeTask}
                            handleToggle={handleToggle}
                         />
                      ))
                   }
               </ul>
           }
         </div>
         </>
     )
}
export default TodoRenderFn