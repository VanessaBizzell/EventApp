const mongoose = require ("mongoose")

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for your event."]
    },
    location:{
        type: String,
        required: [true, "Please provide a location for your event"]
    },
    date:{
        type: String,
        required: [true, "Please provide a date in format DD-MM-YYYY for your event"]
    },


    time:{
        type: String, 
    },
    
    summary: {
        type: String,
        required: [true, "Please provide a brief description for your event."]
    },
    
})

module.exports = mongoose.model("Event", eventSchema);