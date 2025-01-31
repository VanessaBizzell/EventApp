//need this for every express project
//const syntax for import is express-specific
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./router");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const User = require("./schemas/User");
//importing uuid library
const { v4:uuidv4} = require("uuid");
const cors = require("cors");

//allows access from any URL. Can specify exact URL access. 
app.use(cors());

dotenv.config();

connectDB();

//used to parse the request body
app.use(express.json());

//this gets the token so you have ID for the bouncer to check...
//where does route link to?
app.post("/events/auth", async (req, res) => {
  console.log(req.body.username)
  console.log("arrived");
  const user = await User.findOne({ username: req.body.username });
  console.log(user)
  if (!user) {
    //can use a library for error
    return res.sendStatus(401);
  }
  if (req.body.password !== user.password) {
    return res.sendStatus(403);
  }
  //uuid is a library that generates random strings
  user.token = uuidv4();
  await user.save();
  res.send({ token: user.token });
});

// Authorization middleware - this is the 'bouncer' checking your ID before entry!
// HAS TO BE BEFORE ROUTER STUFF
app.use(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const user = await User.findOne({ token: authHeader });
  console.log(user)
  if (user) {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.use(router);

//this is convention - so always put it in!
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
