import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { ConcertDayCount } from './components/ConcertDayCount'

window.React = React;

// render(
//    <ConcertDayCount />,
//    document.getElementById('react-container')
// )

render(
   <App />,
   document.getElementById('react-container')
)
