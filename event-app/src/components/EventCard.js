import React from "react";

const eventCard = ({ eventName, location, date, time, summary, eventID, deleteEvent }) => {
  return (
    <div className="py-6 flex justify-center">
      <div
        className="bg-gray-100 shadow-lg rounded-2xl text-center p-6 w-3/4 md:w-1/2 lg:w-1/2 flex flex-col gap-4"
        id="allEventDisplay"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-gray-800">{eventName}</h3>
          <p className="text-gray-600">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Date:</span> {date}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Time:</span> {time || "N/A"}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Summary:</span> {summary}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="font-medium">Event ID:</span> {eventID}
          </p>
        </div>

        <button onClick={() => deleteEvent(eventID)}  
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default eventCard;
