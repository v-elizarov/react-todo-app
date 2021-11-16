import React from 'react'

import "./todo-list-item.css"

const TodoListItem = (props) => {
    let classNamesForLabel = ""
    let classNamesForBtn = "btn btn-sm"
    let disabled = ""
    const classNamesForBtnLenghtBefore = classNamesForBtn.length
    
    if (props.important) {
        classNamesForLabel += " important"
        classNamesForBtn += " btn-primary"
    }

    if (props.done) {
        classNamesForLabel += " done"
        classNamesForBtn += " hide"
        disabled = "disabled"

        if (props.important) {
            classNamesForBtn += " btn-success"
        } else if (!props.important) {
            classNamesForBtn += " btn-outline-success"
        }
    }

    if (classNamesForBtn.length === classNamesForBtnLenghtBefore) {
        classNamesForBtn += " btn-outline-primary"
    }

    return (
        <span className="todo-list-item">
            <span 
                className={classNamesForLabel}
                onClick={props.onToggleDone}>
                {props.label}
            </span>

            <button
                type="button"
                className={classNamesForBtn}
                disabled={disabled}
                onClick={props.onToggleImportant}>
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