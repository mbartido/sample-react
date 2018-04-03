import React from 'react'
import { render } from 'react-dom'
import { ConcertDayCount } from './components/ConcertDayCount'

window.React = React;

render(
   <ConcertDayCount total={50}
      hot={20}
      cold={10}
      goal={100}/>,
   document.getElementById('react-container')
)
