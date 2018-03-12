import React from 'react'
import './Menu.scss'

import List from '../List/List'

export default function Menu ({data, className}) {
  return (
    <ul className={className}>
      {
        data.links.map(element => {
          if (element.hasOwnProperty('href')) {
            return (
              <li key={element.label + element.href} className='nav-bar__list-item'>
                <a className='nav-bar__list__link-item' href={element.href}>{element.label}</a>
              </li>
            )
          } else {
            return (
              <li key={element.label + element.href} className='nav-bar__list-item'>
                <List data={element} />
              </li>
            )
          }
        })
      }
    </ul>
  )
}
