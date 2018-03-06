import React from 'react'
import './welcome.scss'

export default function Welcome (props) {
  return <h1 className='title'>{`Welcome ${props.name}`}</h1>
}
