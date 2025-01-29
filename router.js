const express = require("express")
const router = express.Router();
const events = require("./eventController")

router.get("/events",events.getAllEvents);
router.post("/events/create", events.createEvent);
router.get("/events/:id", events.getEventById);
// router.delete("/events/:id", events.deleteEventById);
router.put("/events/:id", events.updateEventById);
router.delete("/events/byeventName/:eventName", events.deleteEventByName);


module.exports = router;

//get - used for retrveing data
//post - post is used to send and create data
//delete used to delete data 
//put -used to update data 