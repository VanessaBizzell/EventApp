//need this for every express project
//const syntax for import is express-specific
const express = require("express");
const app = express();
const port = 3001;
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
app.post("/todos/auth", async (req, res) => {
  console.log("arrived");
  const user = await User.findOne({ username: req.body.username });
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
  const user = await User.findOne({ token: authHeader });
  if (user) {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.use(router);

//make a get request
// "/" is the endpoint
//calling an anonymous function with the following variables:
// req = request
// res = response

//request will contain the request body, headers, etc.
//response is used to send back information to the client (person who made the request)

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/test", (req, res) => {
//     res.send("Is this thing on?")
// })

//this is convention - so always put it in!
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
