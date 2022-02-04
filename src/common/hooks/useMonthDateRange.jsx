import { useState } from 'react'
import moment from 'moment'

const getMonthDateRange = (date) => {
  const firstDayMonth = date.clone().startOf('M').startOf('W')
  const lastDayMonth = date.clone().endOf('M').endOf('W')
  const monthDateRange = []

  for (
    let day = firstDayMonth;
    firstDayMonth < lastDayMonth;
    firstDayMonth.add(1, 'days')
  ) {
    monthDateRange.push(day.clone())
  }
  return monthDateRange
}

export default function useRangeDataGenerator() {
  const [dateRange, setDateRange] = useState(getMonthDateRange(moment()))
  const [month, setMonth] = useState(moment())

  const nextMonth = () => {
    const newMonth = month.add(1, 'months')
    setMonth(newMonth)
    setDateRange(getMonthDateRange(newMonth))
  }

  const prevMonth = () => {
    const newMonth = month.subtract(1, 'months')
    setMonth(newMonth)
    setDateRange(getMonthDateRange(newMonth))
  }

  return {
    dateRange,
    nextMonth,
    prevMonth,
    month,
  }
}
