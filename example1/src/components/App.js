import { Component } from 'react'
import { ConcertDayList } from './ConcertDayList'
import { ConcertDayCount } from './ConcertDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component{
   constructor(props) {
      super(props)
      this.state = {
         allConcertDays: [
            {
               place: "Shoreline",
               date: new Date("1/2/2016"),
               hot: true,
               rain: false,
            },
            {
               place: "Santa Clara Fairgrounds",
               date: new Date("3/28/2016"),
               hot: false,
               rain: false,
            },
            {
               place: "Bill Graham",
               date: new Date("4/2/2016"),
               hot: false,
               rain: true,
            }
         ]
      }
   }

   countDays(filter) {
      return this.state.allConcertDays.filter(function(day) {
         if (filter) {
            return day[filter]
         } else {
            return day
         }
      }).length
   }

   render() {
      return (
         <div className="app">
         <Menu />
         {(this.props.location.pathname === "/") ? 
            <ConcertDayCount total={this.countDays()}
            hot={this.countDays('hot')} 
            rain={this.countDays('rain')}/> :
            (this.props.location.pathname === "/add-day") ?
               <AddDayForm /> :
               <ConcertDayList days={this.state.allConcertDays}
                               filter={this.props.params.filter}/>
         }
         </div>
      )
   }
}