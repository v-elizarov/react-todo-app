import React, { Component } from 'react'

import TasksCounter from './tasks-counter'
import ToDoList from './todo-list'
export default class App extends Component {
    state = {
        arrOfTasks: [
            {id: 1, label: "Drink a cup of coffee", important: false, done: true},
            {id: 2, label: "Create new react app", important: false, done: false},
            {id: 3, label: "Send my CV to a company", important: true, done: false}
        ]
    }

    onDeleteTask = (id) => {
        this.setState(({arrOfTasks}) => {
            const indx = arrOfTasks.findIndex((item) => item.id === id)
            
            // create new array without the deleted item
            const arrOfNewData = [
                ...arrOfTasks.slice(0, indx),
                ...arrOfTasks.slice(indx + 1)
            ]

            return {
                arrOfTasks: arrOfNewData
            }
        })
    }

    render() {
        const { appHeader } = this.props
        const { arrOfTasks } = this.state

        return (
            <div>
                <h1>{appHeader}</h1>
                <TasksCounter arrOfTasks={arrOfTasks}/>
                <ToDoList
                    arrOfTasks={arrOfTasks}
                    onDeleteTask={this.onDeleteTask}/>
            </div>
        )
    }
}
