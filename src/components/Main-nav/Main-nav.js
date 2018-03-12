import React, { Component } from 'react'
import './Main-nav.scss'

import Menu from './components/Menu/Menu'

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
          </div>
        </section>
        <Menu className={`nav-bar__list ${activeList.open}`} data={this.props.data} />
      </nav>
    )
  }
}
