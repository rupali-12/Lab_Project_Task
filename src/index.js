import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Labpage1 from './views/labpage1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Labpage1} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
