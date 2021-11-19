import React from 'react'

import "./alert-box.css"

const AlertBox = ({countVisibleTasks, search, filter}) => {
    if (countVisibleTasks > 0) {
        return null
    } else {
        let classNamesForBox = "alert alert-box"
        let classNamesForIcon = "bi"
        let message

        if (search !== '') {
        // If the search can't find the term -> show the warning box
            classNamesForBox += " alert-warning"
            classNamesForIcon += " bi-exclamation-triangle"

            let shortTerm = search.slice(0, 10)
            
            if (search.length > 10) {
                shortTerm += "..." 
            } 

            message = (
                <span>
                    Can't find <strong> "{shortTerm}" </strong> in <strong> {filter[0].toUpperCase() + filter.slice(1)} </strong>. Try to type smth. else...
                </span>
            )
        } else {
            switch (filter) {
            // If the list is empty -> show the primary box
                case 'all':
                    classNamesForBox += " alert-primary"
                    classNamesForIcon += " bi-info-circle"
                    message = "The list is empty! You can add a new task to fix it."
                    break
            // If <Active> filter is empty -> show the success box
                case 'active':
                    classNamesForBox += " alert-success"
                    classNamesForIcon += " bi-check-circle"
                    message = "You haven't active tasks yet."
                    break
            // If <Done> filter is empty -> show the secondary box
                case 'done':
                    classNamesForBox += " alert-secondary"
                    classNamesForIcon += " bi-emoji-neutral"
                    message = "The list of completed tasks is empty."
                    break
                default:
                    break
            }
        }
       
        return (
            <div className={classNamesForBox}>
                <i className={classNamesForIcon}> </i>
                {message}
            </div>
        )
    }
}

export default AlertBox