import React from 'react'

import TodoListItem from '../todo-list-item'

import "./todo-list.css"

const ToDoList = (props) => {
    const listItems = props.arrOfTasks.map((item) => {
        const {id, ...other} = item

        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...other}
                    onDeleteTask={() => props.onDeleteTask(id)}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            { listItems }
        </ul>
    )
}

export default ToDoList