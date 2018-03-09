import React from 'react'
import './Welcome.scss'

export default function Welcome (props) {
  return <h1 className='title'>{`Welcome ${props.name}`}</h1>
}
