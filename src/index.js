import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

const appHeader = "ToDo List"

ReactDOM.render(<App appHeader={appHeader}/>, document.getElementById('root'))