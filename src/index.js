import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

import 'styles/index'

const descriptor = {
  version: VERSION || 'unknown', // eslint-disable-line no-undef
  timestamp: TIMESTAMP || 'unknown' // eslint-disable-line no-undef
}

ReactDOM.render(
  <App descriptor={ descriptor } />,
  document.getElementById('app')
)
