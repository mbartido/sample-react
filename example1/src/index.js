import React from 'react'
import { render } from 'react-dom'
import { ConcertDayList } from './components/ConcertDayList'
import { ConcertDayCount } from './components/ConcertDayCount'

window.React = React;

render(
   <ConcertDayCount />,
   document.getElementById('react-container')
)

// render(
//    <ConcertDayList days={
//       [
//          {
//             place: "Shoreline",
//             date: new Date("1/2/2016"),
//             hot: true,
//             rain: false,
//          },
//          {
//             place: "Santa Clara Fairgrounds",
//             date: new Date("3/28/2016"),
//             hot: false,
//             rain: false,
//          },
//          {
//             place: "Bill Graham",
//             date: new Date("4/2/2016"),
//             hot: false,
//             rain: true,
//          }
//       ]
   
//    }/>,
//    document.getElementById('react-container')
// )
