import React from 'react'

const AddEvent = () => {
  return (
    <div onSubmit={submitHandler} className='bg-gray-500 container flex mx-auto' id='addEventDisplay' >
        <h2 className=''>Add Event</h2>
        <form>
        <label>Event Name</label>
        <input type='text' name='eventName'></input>
        <label>Location</label>
        <input type='text' name='eventLocation'></input>
        <label>Date</label>
        <input type='text' name='eventDate'></input>
        <label>Time (optional)</label>
        <input type='text' name='eventTime'></input>
        <label>Summary</label>
        <input type='text' name='eventName'></input>
        </form>
    </div>
  )
}

export default AddEvent