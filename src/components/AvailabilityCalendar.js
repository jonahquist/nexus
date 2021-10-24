import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!

class AvailabilityCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        plugins={[ timeGridPlugin, interactionPlugin ]}
        initialView="timeGridWeek"
        events={[
          {title: 'event 1', start: '2021-10-24T07:30:00', end: '2021-10-24T08:40:00' },
          {title: 'event 2', start: '2021-10-25T08:30:00', end: '2021-10-25T09:40:00' },
          {title: 'event 3', start: '2021-10-26T09:30:00', end: '2021-10-26T10:40:00' }
        ]}
        editable='true'
        eventTextColor='white'
        eventResizableFromStart='true'
        eventStartEditable='true'
        eventDurationEditable='true'
      />
    )
  }
}
export default AvailabilityCalendar;