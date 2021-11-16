import React from 'react'

const TodoListItem = (props) => {
    return (
        <span>
            {props.label}

            <button 
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={props.onDeleteTask}>
                <i className="bi bi-trash"></i>
            </button>

            <button
                type="button"
                className="btn btn-sm btn-outline-secondary">
                <i className="bi bi-exclamation"></i>
            </button>
        </span>
    )
}

export default TodoListItem