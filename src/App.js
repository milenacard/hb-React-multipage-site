import React, { Fragment } from 'react'

import Welcome from './components/Welcome.js'

export default function App (props) {
  return (
    <Fragment>
      <Welcome name={props.data.name} />
    </Fragment>
  )
}
