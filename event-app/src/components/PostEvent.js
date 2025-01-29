
import React, { useState } from "react";

const PostEvent = ({client}) => {
  const [data, setData] = useState({
    eventName: "",
    location: "",
    date: "",
    time: "",
    summary: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    console.log("Form submitted with data:", data);
    
    //send data to API
   
    
    // do something with a API response -eg. display a success or failure message
   const response = await client.addEvent(data);
    console.log(response)
    //then if statement to work with the response eg. error message or success message  
    if (response.data.status === "200") {
      // consider adding a user message (not console.log)
      console.log("Event added successfully");
    } else {
      console.log("Error adding event");}
  };


  return (
    <div
      className="bg-gray-100 container mx-auto p-6 rounded-lg shadow-lg max-w-md mt-10"
      id="addEventDisplay"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Add Event</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Event Name</label>
          <input
            type="text"
            name="eventName"
            value={data.eventName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={data.eventLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="text"
            name="date"
            value={data.eventDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Time (optional)</label>
          <input
            type="text"
            name="time"
            value={data.eventTime}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-medium mb-1">Summary</label>
          <input
            type="text"
            name="summary"
            value={data.eventSummary}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
};
  export default PostEvent;







