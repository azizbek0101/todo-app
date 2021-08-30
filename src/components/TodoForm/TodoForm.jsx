import "./TodoForm.css"

function TodoForm ( { addTask } ) {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <form 
            className="form"
            onSubmit={handleSubmit}>
                <input 
                    className="todo-input" 
                    type="text" 
                    onKeyUp={addTask}
                    placeholder="write what do you plan to do..."
                />
            </form>
    )
}

export default TodoForm