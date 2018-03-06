import React, { Fragment, Component } from 'react'
import Welcome from './components/welcome.js'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: props.data
    }
  }

  render () {
    return (
      <Fragment>
        <Welcome name={this.state.data.name} />
      </Fragment>
    )
  }
}
