"use client";
import React from "react";
import EventCard from "@/components/EventCard.js";
import PostEvent from "@/components/PostEvent";
// import { ApiClient } from "../apiclient/client";
import { useState, useEffect } from "react";



const Dashboard = ({ client }) => {
  const [events, setEvents] = useState([]);


  useEffect(() => {
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

    fetchData();
  }, []);

  return (
    <div>

    <div>
      <PostEvent
      client={client}

      
      />
    </div>

      <div>
      <h2 className="font-bold text-center pt-3">All Events</h2>
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
            eventID={event.id}
          />
        );
      })}
    </div>
  );
};



export default Dashboard;
