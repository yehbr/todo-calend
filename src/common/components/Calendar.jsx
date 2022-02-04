import React from 'react'
import moment from 'moment'
import 'moment/locale/ru'
import useRangeDataGenerator from '../hooks/useMonthDateRange'
import { WrappedCalendar, NameDay, Title, Head } from '../styles/StyledCalendar'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { RiArrowRightSLine } from 'react-icons/ri'
import Day from './Day'

function Calendar({ events }) {
  const { dateRange, nextMonth, prevMonth, month } = useRangeDataGenerator()

  const nameDays = moment.weekdaysShort(true)
  const monthName =
    moment().format('YYYY') === month.format('YYYY') ? 'MMMM' : 'MMMM YYYY'

  return (
    <>
      <Head>
        <RiArrowLeftSLine onClick={prevMonth} />
        <Title>{month.format(monthName)}</Title>
        <RiArrowRightSLine onClick={nextMonth} />
      </Head>
      <WrappedCalendar>
        {nameDays.map((i) => (
          <NameDay key={i}>{i}</NameDay>
        ))}
        {dateRange.map((i) => (
          <Day key={i.format('YYYY-MM-DD')} dates={i} events={events} />
        ))}
      </WrappedCalendar>
    </>
  )
}

export default Calendar
