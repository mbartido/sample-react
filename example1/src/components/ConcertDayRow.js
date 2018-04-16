import MdWbSunny from 'react-icons/lib/md/wb-sunny'
import Tint from 'react-icons/lib/fa/tint'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const ConcertDayRow = ({place, date, hot, rain}) => (
   <tr>
      <td>
         {date}
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
   date: PropTypes.string.isRequired,
   hot: PropTypes.bool,
   rain: PropTypes.bool
}