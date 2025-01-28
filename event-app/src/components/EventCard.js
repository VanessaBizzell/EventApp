import React from 'react'
// import { getAllEvents } from "@/eventcontroller"

const eventCard = ({
  eventName,
  location,
  date,
  time,
  summary,
  id,
}) => {
  return (
    <div>
    <div className='bg-gray-500 container flex mx-auto' id='allEventDisplay' > 
      <h2 className=''>All Events</h2>
      <p>{eventName}</p>
      <p>{location}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{summary}</p>
      <p>{id}</p>
    </div>
    
    </div>
  )
}

export default eventCard