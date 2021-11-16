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
        classNamesForBtn += " btn-outline-success hide"
        disabled = "disabled"
    }

    if (classNamesForBtn.length === classNamesForBtnLenghtBefore) {
        classNamesForBtn += " btn-outline-secondary"
    }

    return (
        <span className="todo-list-item">
            <span className={classNamesForLabel}>
                {props.label}
            </span>

            <button
                type="button"
                className={classNamesForBtn}
                disabled={disabled}>
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