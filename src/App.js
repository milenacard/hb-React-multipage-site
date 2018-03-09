import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
// install depedency react-router-dom

import Welcome from './components/Welcome.js'

export default function App (props) {
  return (
    <Fragment>
        <Route exact path='/'>
          render = {() => <Welcome name={props.data.name} /> }
        </Route>
    </Fragment>
  )
}
