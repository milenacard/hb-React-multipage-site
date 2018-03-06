import React from 'react'
import { render } from 'react-dom'

import App from './App'
import data from '../data/data.json'

render(<App data={data} />, document.getElementById('app'))
