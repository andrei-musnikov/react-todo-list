import React, { useState } from 'react'
import './style.css'

const NewTodoForm = (props) => {
    const [inputValue, setInputValue] = useState('')

    const { todos, onCreatePressed } = props

    console.log(todos);
    console.log(inputValue);

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                }}
                className="new-todo-button">Create Todo</button>
        </div>
    )
}
export { NewTodoForm }