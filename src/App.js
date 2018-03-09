import React, { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Welcome from './components/Welcome.js'

export default function App (props) {
  return (
    <Router>
      <Fragment>
        <Route exact path='/'
          render={() => <Welcome name={props.data.name} />} />
      </Fragment>
    </Router>
  )
}
