import React from 'react'
import './Menu.scss'

export default function Menu ({data}) {
  return (
    <ul>
      {
        data.links.map(element => {
          if (element.hasOwnProperty('href')) {
            return (
              <li key={element.label + element.href} className='nav-bar__list-item'>
                <a className='nav-bar__list__link-item' />
              </li>
            )
          } else {
            return (
              <li key={element.label + element.href} className='nav-bar__list-item'>
                <button className='nav-bar__list-item-button'>{element.label}</button>
                <ul className='nav-bar__list__link'>
                  {
                    element.links.map(subelement => {
                      return (
                        <li key={subelement.label + subelement.href} className='nav-bar__list__item-link'>
                          <a className='nav-bar__list__subitem-link' href={subelement.href}>{element.label}</a>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          }
        })
      }
    </ul>
  )
}
