import React, { Component } from 'react'

import "./search-panel.css"

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onTermChange = (e) => {
        const term = e.target.value

        this.setState({ term: term })
        
        this.props.onSearchChange(term)
    }

    render() {
        return (
            <div className="search-panel">
                <div className="input-group mb-3">

                    <span className="input-group-text">
                        <i className="bi bi-search"></i>
                    </span>

                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Type here to search"
                        value={this.state.term}
                        onChange={this.onTermChange}/>
                </div>
            </div>
        )
    }
}