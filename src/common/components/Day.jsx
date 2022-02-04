import moment from 'moment'
import React from 'react'
import { WrappedDay, NumberDay, Event } from '../styles/StyledDay'

function Day({ dates, events }) {
  const filteredEvents = events
    .filter(
      (i) => moment(i.date).format('YYYY-MM-DD') === dates.format('YYYY-MM-DD')
    )
    .sort((a, b) => {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0
    })

  const weekendDay = dates.format('d') === '0' || dates.format('d') === '6'
  const presentDay =
    moment().format('YYYY-MM-DD') === dates.format('YYYY-MM-DD')
  const lastDay = moment().format('YYYY-MM-DD') > dates.format('YYYY-MM-DD')

  return (
    <WrappedDay lastDay={lastDay} presentDay={presentDay}>
      <NumberDay presentDay={presentDay} weekendDay={weekendDay}>
        {dates.format('DD')}
      </NumberDay>
      {filteredEvents.map((i) => (
        <Event
          key={i.id}
          red={i.type === 'red'}
          green={i.type === 'green'}
          orange={i.type === 'orange'}
        >
          {moment(i.date).format('H:mm')} {i.name}
        </Event>
      ))}
    </WrappedDay>
  )
}

export default Day
