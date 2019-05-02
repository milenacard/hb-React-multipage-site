import React, { Component } from 'react'
import './Menu.scss'

import List from '../List/List'

export default class Menu extends Component {
  constructor (props) {
    super(props)

    this.arrayItem = []
  }

  render () {
    return (
      <ul className={this.props.className}>
        {
          this.props.data.links.map(element => {
            if (element.hasOwnProperty('href')) {
              return (
                <li key={element.label + element.href} className='nav-bar__list-item'>
                  <a className='nav-bar__list__link-item' href={element.href}>{element.label}</a>
                </li>
              )
            } else {
              return (
                <li key={element.label + element.href} className='nav-bar__list-item'>
                  <List data={element}
                    ref={(list) => { this.arrayItem.push(list) }} />
                </li>
              )
            }
          })
        }
      </ul>
    )
  }
}
