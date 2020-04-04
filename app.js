// Importing express module
var express = require("express");

// Importing the controller module that it could be accessed from app.js
var todoController = require("./controllers/todoController");

// Setting up the express app
var app = express();

// Setting up template engine
app.set("view engine", "ejs");

// Setting up static files
app.use(express.static('./public'));

//starting the app by transfering it to the todoController.js so it can be used and managed there
todoController(app);

// Listening to port
app.listen(3000);
console.log("You are listening to port 3000");