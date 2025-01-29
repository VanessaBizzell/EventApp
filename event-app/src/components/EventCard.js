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
    <div className='py-2 px-8 flex justify-center'>
    <div className='bg-gray-200 shadow-md flex grid grid-cols-1 rounded-2xl text-center gap-2 p-2 w-1/2' id='allEventDisplay'> 
      <h3>{eventName}</h3>
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