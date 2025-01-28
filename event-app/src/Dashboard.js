"use client";
import React from 'react'
import EventCard from '@/components/EventCard.js'
import { ApiClient } from '../apiclient/client'
import { useState, useEffect } from "react"

const Dashboard = ({ client }) => {

  const [events, setEvents] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.getEvents();
        console.log(data.data)
        setEvents(data.data)
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  


  return (
    <div>
      {
        events?.map(event => {
          return <div key={event._id}>{event.name}</div>
          // return <EventCard />
        })
      }
    
    </div>
  )
}

export default Dashboard