import React, { Component } from 'react'
import './Main-nav.scss'

export default class MainNav extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
    this.data = props.data
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

    return (
      <nav className='nav-bar'>
        <MainNav className='nav-bar__container' >
          <button className={`nav-bar__hamburger ${activeHamburger.open}`} onClick={this.toggle}>
            <div className='nav-bar__hamburger-line nav-bar__hamburger-line-first' />
            <div className='nav-bar__hamburger-line nav-bar__hamburger-line-middle' />
            <div className='nav-bar__hamburger-line nav-bar__hamburger-line-last' />
          </button>
          <div className='nav-bar__logo-container'>
            <a className='nav-bar__logo-link'>
              <img className='nav-bar__logo-image' />
            </a>
          </div>
        </MainNav>
      </nav>
    )
  }
}
