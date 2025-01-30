"use client";
import React from "react";
import EventCard from "@/components/EventCard.js";
import PostEvent from "@/components/PostEvent";
import { useState, useEffect } from "react";

const Dashboard = ({ client }) => {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const data = await client.getEvents();
      console.log(data.data);
      setEvents(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEvent = async (eventID) => {
    console.log("Event ID to delete:", eventID);
   
    const response = await client.deleteEventByID( eventID );
    console.log(response);
    if (response.status === 200) {
      // consider adding a user message (not console.log)
      console.log("Event deleted successfully");
      //reload data which changes state...which causes a re-render
      fetchData();
    } else {
      console.log("Error deleted event", response);
    }
  }

  return (
    <div>
      <div>
        <PostEvent client={client} />
      </div>


      <div>
        <h2 className="font-bold text-center text-2xl pt-6">All Events</h2>
      </div>
      {events?.map((event) => {
        return (
          <EventCard
            key={event._id}
            eventName={event.eventName}
            location={event.location}
            date={event.date}
            time={event.time}
            summary={event.summary}
            eventID={event._id}
            deleteEvent={deleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
