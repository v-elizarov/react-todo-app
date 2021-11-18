import React, { Component } from 'react'

import "./filter-panel.css"

export default class FilterPanel extends Component {
    state = {
        filter: 'all',
        arrOfButtons: [
            {id: 'all', label: 'All'},
            {id: 'active', label: 'Active'},
            {id: 'done', label: 'Done'}
        ]
    }

    onFilterChange = (e) => {
        const currentFilter = e.target.id

        if (currentFilter !== this.state.filter) {
            this.setState({ filter: currentFilter })
            this.props.onFilterChange(currentFilter)
        }
    }

    render() {
        const filterButtons = this.state.arrOfButtons.map((item) => {
            let classNames = "btn btn-primary"

            if (item.id === this.state.filter) {
                classNames += " active"
            }

            return (
                <button
                    key={item.id}
                    id={item.id}
                    type="button"
                    className={classNames}
                    onClick={this.onFilterChange}>
                    {item.label}
                </button>
            )
        })

        return (
            <div className="btn-group status-filter">
                {filterButtons}
            </div>
        )
    }
}