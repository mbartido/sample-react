import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import { ConcertDayRow } from './ConcertDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const ConcertDayList = ({days, filter}) => {
   const filteredDays = (!filter || !filter.match(/rain|hot/)) ?
                        days: 
                        days.filter(day => day[filter])
   
   return (
      <div className="concert-day-list">
         <table>
            <thead>
               <tr>
                  <th>Date</th>
                  <th>Place</th>
                  <th>Rain</th>
                  <th>Hot</th>
               </tr>
               <tr>
                  <td colSpan={4}>
                     <Link to="/list-days">
                        All Days
                     </Link>
                     <Link to="/list-days/rain">
                        Rain Days
                     </Link>
                     <Link to="/list-days/hot">
                        Hot Days
                     </Link>
                  </td>
               </tr>
            </thead>
            <tbody>
               {filteredDays.map((day, i) =>
                  <ConcertDayRow key={i}
                                 {...day}/>
               )}
            </tbody>
         </table>
      </div>
)}

ConcertDayList.propTypes = {
   days: function(props) {
      if (!Array.isArray(props.days)) {
         return new Error(
            "ConcertDayList should be an array"
         )
      } else if (!props.days.length) {
         return new Error(
            "ConcertDayList must have at least one record"
         )
      } else {
         return null
      }
   }
}

