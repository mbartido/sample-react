import '../stylesheets/ui.scss'
import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
   return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
   return percentToDecimal(total/goal);
}

export const ConcertDayCount = ({total=70, hot=20, 
                                 rain=10, goal=100}) => (
         <div className="concert-day-count">
            <div className="total-days">
               <span>{total} </span>
                  <Calendar />
               <span> days</span>
            </div>
            <div className="hot-days">
               <span>{hot} </span>
                  <MdWbSunny />
               <span> days</span>
            </div>
            <div className="rain-days">
               <span>{rain} </span>
                  <Tint />
               <span> days</span>
            </div>
            <div>
               <span>{calcGoalProgress(total, 
                                       goal)}
               </span>
            </div>
         </div>
)

ConcertDayCount.propTypes = {
   total: PropTypes.number,
   hot: PropTypes.number,
   rain: PropTypes.number,
   goal: PropTypes.number
}
