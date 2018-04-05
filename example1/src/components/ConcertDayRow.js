import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const ConcertDayRow = ({place, date, hot, rain}) => (
   <tr>
      <td>
         {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
      </td>
      <td>
         {place}
      </td>
      <td>
         {(rain) ? <Tint /> : null}
      </td>
      <td>
         {(hot) ? <MdWbSunny /> : null}
      </td>
   </tr>
)

ConcertDayRow.propTypes = {
   place: PropTypes.string.isRequired,
   date: PropTypes.instanceOf(Date).isRequired,
   hot: PropTypes.bool,
   rain: PropTypes.bool
}