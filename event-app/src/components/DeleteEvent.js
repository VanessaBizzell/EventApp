

import React, { useState } from "react";

const DeleteEvent = ({client}) => {
  const [data, setData] = useState({
    eventName: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    // e.preventDefault();
    console.log("Form submitted with data:", data);
    
    //send data to API
   
    
    // do something with a API response -eg. display a success or failure message
   //const response = await client.deleteEvent(data);
   const response = await client.deleteEvent({ eventName: data.eventName });

    console.log(response)
    //then if statement to work with the response eg. error message or success message  
    if (response.data.status === "200") {
      // consider adding a user message (not console.log)
      console.log("Event deleted successfully");
    } else {
      console.log("Error deleted event");}
  };


  return (
    <div
      className="bg-gray-100 container mx-auto p-6 rounded-lg shadow-lg max-w-md mt-10"
      id="addEventDisplay"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Delete Event</h2>
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
  
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Delete Event
        </button>
      </form>
    </div>
  );
};

export default DeleteEvent