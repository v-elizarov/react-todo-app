import React, { Component } from 'react'

import TasksCounter from '../tasks-counter'
import ToDoList from '../todo-list'

import "./app.css"
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

    onToggleProperty = (arr, id, field) => {
       // find index of the task by id 
       const indx = arr.findIndex((item) => item.id === id)
       const task = arr[indx]
       // invert the value
       const newValue = !task[field]
       // build a new task with the changed field (done/important)
       const newTask = {
           ...task,
           [field]: newValue
       }
       // return a new arr that contains the changed task
       return [
           ...arr.slice(0, indx),
           newTask,
           ...arr.slice(indx + 1)
       ]
    }

    onToggleDone = (id) => {
        this.setState(({arrOfTasks}) => {
            const arrOfNewData = this.onToggleProperty(arrOfTasks, id, 'done')

            return {
                arrOfTasks: arrOfNewData
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({arrOfTasks}) => {
            const arrOfNewData = this.onToggleProperty(arrOfTasks, id, 'important')

            return {
                arrOfTasks: arrOfNewData
            }
        })
    }

    render() {
        const { appHeader } = this.props
        const { arrOfTasks } = this.state

        return (
            <div className="wrapper">
                <div className="flex-row">
                    <h1>{appHeader}</h1>
                    <TasksCounter arrOfTasks={arrOfTasks}/>
                </div>
                <ToDoList
                    arrOfTasks={arrOfTasks}
                    onDeleteTask={this.onDeleteTask}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}/>
            </div>
        )
    }
}

