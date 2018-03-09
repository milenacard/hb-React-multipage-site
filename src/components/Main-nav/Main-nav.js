import React, { Component } from 'react'
import './MainNav.scss'

export class MainNav extends Component {
  constructor (props) {
    super(props)
    this.data = props.data
    this.state = {
      open: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toogle () {
    this.setState((prevState) => {
      return {open: !prevState.open}
    })
  }

  render () {
    const activeHamburger = {
      open: this.state.open ? '' : 'nav-bar__hamburger--clicked'
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
