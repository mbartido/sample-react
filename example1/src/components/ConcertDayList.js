import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import { ConcertDayRow } from './ConcertDayRow'
import { PropTypes } from 'react'

export const ConcertDayList = ({days}) => (
   <table>
      <thead>
         <tr>
            <th>Date</th>
            <th>Place</th>
            <th>Rain</th>
            <th>Hot</th>
         </tr>
      </thead>
      <tbody>
         {days.map((day, i) =>
            <ConcertDayRow key={i}
                           {...day}/>
         )}
      </tbody>
   </table>
)

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

