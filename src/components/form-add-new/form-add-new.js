import React, { Component } from 'react'

import "./form-add-new.css"

export default class FormAddNew extends Component {
    state = {
        term: ''
    }

    onSubmit = (e) => {
        // disable page reload
        e.preventDefault();
        // get current value from this state
        const { term } = this.state
        // change term to default ''
        this.setState({term: ''})
        // get a function via props
        const { onAddTask } = this.props

        // if term containts only spaces
        // don't create a new task
        const regexp = /^\s*$/
        const isTermEmpty = regexp.test(term)

        if (!isTermEmpty) {
            onAddTask(term)
        } 
    }

    onTermChange = (e) => {
        this.setState({
            term: e.target.value
        })
    }
    
    render() {
        const maxlength = "0123456789ABCDEFGHIJKLMNOPQRSTUVW".length

        return (
            <form onSubmit={this.onSubmit}>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="What needs to be done?"
                    maxLength={maxlength}
                    value={this.state.term}
                    onChange={this.onTermChange}/>

                <button className="btn btn-outline-success" type="submit">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>
        </form>
        )
    }
}