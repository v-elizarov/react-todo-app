import React from 'react'

import "./todo-list-item.css"

const TodoListItem = (props) => {
    return (
        <span className="todo-list-item">
            <span>{props.label}</span>

            <button
                type="button"
                className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-exclamation"></i>
            </button>
            
            <button 
                type="button"
                className="btn btn-sm btn-outline-danger hide"
                onClick={props.onDeleteTask}>
                <i className="bi bi-trash"></i>
            </button>
        </span>
    )
}

export default TodoListItem