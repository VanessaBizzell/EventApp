
const createError = require("http-errors");
const eventDB = require("./schemas/Events");

exports.getAllEvents = async (req, res) => {
  try {
    const events = await eventDB.find();
    res.send(events);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.createEvent = async (req, res) => {
  try {
    const { name, location, summary, date, time } = req.body;
    const newEvent = await eventDB.create({
      name,
      location,
     summary,
      date,
      time,
    });
    res.send(newEvent);
  } catch (error) {
    next(createError(500, error.message));
  }
};


exports.getEventById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const event = await eventDB.findById(id);
    if (!event) {
      return next(createError(404, "No event with that id"));
    }
    res.send(event);
  } catch (error) {
    next(createError(500, error.message));
  }
};


exports.deleteEventById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const event = await eventDB.findByIdAndDelete(id);
    if (!movie) {
      return next(createError(404, "No event with that id"));
    }
    res.send(event);
  } catch (error) {
    next(createError(500, error.message));
  }
};

exports.updateEventById = async (req, res, next) => {
  const {  name, location, summary, date, time } = req.body;
  const id = req.params.id;


  try {
    const event = await eventDB.findByIdAndUpdate(id, {

      name: name,
      location: location,
      summary: summary,
      date: date,
      time: time,
    },{new:true});
    if (!event) {
      return res.send("event not found");
    }
    res.send(event);
  } catch (error) {
    next(createError(500, error.message));
  }
};
