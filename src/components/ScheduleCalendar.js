import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import interactionPlugin from '@fullcalendar/interaction'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

class ScheduleCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridWeek"
        events={[
          {title: 'event 1', start: '2021-10-24T12:30:00', end: '2021-10-24T12:40:00' },
          {title: 'event 2', start: '2021-10-25T13:30:00', end: '2021-10-25T14:40:00' },
          {title: 'event 3', start: '2021-10-26T14:30:00', end: '2021-10-26T15:40:00' }
        ]}
        eventTextColor='white'
      />
    )
  }
}

export default ScheduleCalendar;