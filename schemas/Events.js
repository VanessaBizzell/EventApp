const mongoose = require ("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title for your movie."]
    },
    director:{
        type: String,
        required: [true, "Please provide a director(s) for your movie"]
    },
    year:{
        type: Number,
        required: [true, "Please provide a year for your movie"]
    },
    watched: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Movie", movieSchema);