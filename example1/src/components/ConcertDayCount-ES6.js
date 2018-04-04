import { Component, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'

export class ConcertDayCount extends Component {
   percentToDecimal(decimal) {
      return ((decimal * 100) + '%')
   }

   calcGoalProgress(total, goal) {
      return this.percentToDecimal(total/goal)
   }

   render() {
      return (
         <div className="concert-day-count">
            <div className="total-days">
               <span>{this.props.total} </span>
                  <Calendar />
               <span> days</span>
            </div>
            <div className="hot-days">
               <span>{this.props.hot} </span>
                  <MdWbSunny />
               <span> days</span>
            </div>
            <div className="rain-days">
               <span>{this.props.rain} </span>
                  <Tint />
               <span> days</span>
            </div>
            <div>
               <span>
                  {this.calcGoalProgress(
                     this.props.total,
                     this.props.goal
                  )}
               </span>
            </div>
         </div>
      )
   }
}

ConcertDayCount.defaultProps = {
   total: 50,
   hot: 10,
   rain: 15,
   goal: 75
}

ConcertDayCount.propTypes = {
   total: PropTypes.number,
   hot: PropTypes.number,
   rain: PropTypes.number
}