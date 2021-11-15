import React from 'react'

const TasksCounter = (props) => {
    // count items with done === false
    const count = props.arrOfTasks.filter((item) => !item.done).length
    // count items with done === true
    const done = props.arrOfTasks.filter((item) => item.done).length
    
    return (
        <span>{count} more to do, {done} done</span>
    )
}

export default TasksCounter