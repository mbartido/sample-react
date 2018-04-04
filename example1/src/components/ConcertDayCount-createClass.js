import { createClass, PropTypes } from 'react'
import '../stylesheets/ui.scss'
import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'

export const ConcertDayCount = createClass({
   propTypes: {
      total: PropTypes.number.isRequired,
      hot: PropTypes.number,
      rain: PropTypes.number
   },
   
   getDefaultProps() {
      return {
         total: 50,
         hot: 50,
         rain: 15,
         goal: 100
      }
   },
   
   percentToDecimal(decimal) {
      return ((decimal * 100) + '%')
   },

   calcGoalProgress(total, goal) {
      return this.percentToDecimal(total/goal)
   },

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
})