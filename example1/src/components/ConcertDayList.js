import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import { ConcertDayRow } from './ConcertDayRow'

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