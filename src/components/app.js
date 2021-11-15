import React, { Component } from 'react'

export default class App extends Component {
    state = {
        arrOfTasks: [
            {id: 1, label: "Drink a cup of coffee", important: false, done: true},
            {id: 2, label: "Create new react app", important: false, done: false},
            {id: 3, label: "Send my CV to a company", important: true, done: false}
        ]
    }

    render() {
        const { appHeader } = this.props

        return (
            <h1>{appHeader}</h1>
        )
    }
}

