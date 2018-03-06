import React, { Fragment, Component } from 'react'
import Welcome from './components/Welcome.js'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.data = props.data
  }

  render () {
    return (
      <Fragment>
        <Welcome name={this.data.name} />
      </Fragment>
    )
  }
}
