import React from 'react'
import Calendar from './common/components/Calendar'
import Layout from './common/layouts/Layout'
import { eventsDataMoc } from './common/moc/events_data_moc'

function App() {
  return (
    <Layout>
      <Calendar events={eventsDataMoc} />
    </Layout>
  )
}

export default App
