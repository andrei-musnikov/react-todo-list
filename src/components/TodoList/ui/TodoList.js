import React from 'react'
import { NewTodoForm } from '../../NewTodoForm'
import { TodoListItem } from '../../TodoListItem'
import './style.css'

const TodoList = ({ todos = [] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
)

export { TodoList } 