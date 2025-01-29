
import React, { useState } from "react";
import { addEvent } from "../apiclient/client";

const PostEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventLocation: "",
    eventDate: "",
    eventTime: "",
    eventSummary: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted with data:", data);
    
    //send data to API
   
    await addEvent(data)
  };

  return (
    <div className="bg-gray-500 container flex mx-auto" id="addEventDisplay">
      <h2>Add Event</h2>
      <form onSubmit={submitHandler}>
        <label>Event Name</label>
        <input
          type="text"
          name="eventName"
          value={data.eventName}
          onChange={handleChange}
        />

        <label>Location</label>
        <input
          type="text"
          name="eventLocation"
          value={data.eventLocation}
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="text"
          name="eventDate"
          value={data.eventDate}
          onChange={handleChange}
        />

        <label>Time (optional)</label>
        <input
          type="text"
          name="eventTime"
          value={data.eventTime}
          onChange={handleChange}
        />

        <label>Summary</label>
        <input
          type="text"
          name="eventSummary"
          value={data.eventSummary}
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-500">
          Submit Event
        </button>
      </form>
    </div>
  );
};

export default PostEvent;


// const AddEvent = () => {
//   return (
//     <div onSubmit={submitHandler} className='bg-gray-500 container flex mx-auto' id='addEventDisplay' >
//         <h2 className=''>Add Event</h2>
//         <form>
//         <label>Event Name</label>
//         <input type='text' name='eventName'></input>
//         <label>Location</label>
//         <input type='text' name='eventLocation'></input>
//         <label>Date</label>
//         <input type='text' name='eventDate'></input>
//         <label>Time (optional)</label>
//         <input type='text' name='eventTime'></input>
//         <label>Summary</label>
//         <input type='text' name='eventName'></input>
//         </form>
//         <button className='bg-blue-500'>Submit Event</button>
//     </div>
//   )
// }

// export default AddEvent