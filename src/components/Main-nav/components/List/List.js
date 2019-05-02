import React, { Component, Fragment } from 'react'
import './List.scss'

export default class List extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState((prevState) => {
      return {open: !prevState.open}
    })
  }

  render () {
    const listLinkActivate = {
      open: this.state.open ? 'nav-bar__list__link--activate' : ''
    }

    return (
      <Fragment>
        <button className='nav-bar__list-item-button' onClick={this.toggle}>{this.props.data.label}</button>
        <ul className={`nav-bar__list__link ${listLinkActivate.open}`} >
          {
            this.props.data.links.map(element => {
              return (
                <li key={element.label + element.href} className='nav-bar__list__item-link'>
                  <a className='nav-bar__list__subitem-link' href={element.href}>{element.label}</a>
                </li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
