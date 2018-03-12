import React from 'react'
import { render } from 'react-dom'

import App from './App'
import data from '../data/data.json'
import '../node_modules/reset-css/_reset.scss'

render(<App data={data} />, document.getElementById('app'))
