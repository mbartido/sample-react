import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import '../stylesheets/ui.scss'

const percentToDecimal = (decimal) => {
   return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
   return percentToDecimal(total/goal);
}

export const ConcertDayCount = ({total, hot, cold, goal}) => (
         <div className="concert-day-count">
            <div className="total-days">
               <span>{total} </span>
                  <Calendar />
               <span> days</span>
            </div>
            <div className="hot-days">
               <span>{hot} </span>
                  <Terrain />
               <span> days</span>
            </div>
            <div className="rain-days">
               <span>{cold} </span>
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
