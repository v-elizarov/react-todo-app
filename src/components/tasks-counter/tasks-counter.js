import React from 'react'

import "./tasks-counter.css"

const TasksCounter = (props) => {
    // count items with done === false
    const count = props.arrOfTasks.filter((item) => !item.done).length
    // count items with done === true
    const done = props.arrOfTasks.filter((item) => item.done).length
    
    return (
        <span className="tasks-counter">
            {count} more to do, {done} done
        </span>
    )
}

export default TasksCounter