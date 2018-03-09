import React, { Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import MainNav from './components/Main-nav/Main-nav.js'

export default function App (props) {
  return (
    <Router>
      <Fragment>
        <Route exact path='/'
          render={() => <MainNav content={this.props.data.mainNav} />} />
      </Fragment>
    </Router>
  )
}
