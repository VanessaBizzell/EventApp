
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
    e.preventDefault(); // Prevent default form submission
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
          name="location"
          value={data.eventLocation}
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="text"
          name="date"
          value={data.eventDate}
          onChange={handleChange}
        />

        <label>Time (optional)</label>
        <input
          type="text"
          name="time"
          value={data.eventTime}
          onChange={handleChange}
        />

        <label>Summary</label>
        <input
          type="text"
          name="summary"
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