import React, { Component, Fragment } from 'react'
import './Main-nav.scss'

export default class MainNav extends Component {
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
    const activeHamburger = {
      open: this.state.open ? 'nav-bar__hamburger--clicked' : ''
    }

    const activeList = {
      open: this.state.open ? 'nav-bar__list--activate' : ''
    }

    return (
      <nav className='nav-bar'>
        <section className='nav-bar__container' >
          <button className={`nav-bar__hamburger ${activeHamburger.open}`} onClick={this.toggle}>
            <div className='nav-bar__hamburger-line nav-bar__hamburger-line-first' />
            <div className='nav-bar__hamburger-line nav-bar__hamburger-line-middle' />
            <div className='nav-bar__hamburger-line nav-bar__hamburger-line-last' />
          </button>
          <div className='nav-bar__logo-container'>
            <a className='nav-bar__logo-link' href={this.props.data.logo.link}>
              <img className='nav-bar__logo-image' src={this.props.data.logo.img} />
            </a>
         // </div>
        </section>
        <ul className={`nav-bar__list ${activeList.open}`}>
          {
            this.props.data.links.map(element => {
              if (element.hasOwnProperty('href')) {
                return (
                  <li key={element.label + element.href} className='nav-bar__list-item'>
                    <a className='nav-bar__list__link-item' />
                  </li>
                )
              } else {
                return (
                  <Fragment>
                    <li className='nav-bar__list-item'>
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
                  </Fragment>
                )
              }
            })
          }
        </ul>
      </nav>
    )
  }
}
