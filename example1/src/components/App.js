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
               date: "2016-01-02",
               hot: true,
               rain: false,
            }
         ]
      }
      this.addDay = this.addDay.bind(this)
   }
   
   addDay(newDay) {
      this.setState({
         allConcertDays: [
            ...this.state.allConcertDays,
            newDay
         ]
      })
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
               <AddDayForm onNewDay={this.addDay}/> :
               <ConcertDayList days={this.state.allConcertDays}
                               filter={this.props.params.filter}/>
         }
         </div>
      )
   }
}