//clears out the terminal and clear out extra garbage when it reloads
console.clear();

//function that will create our application
const express = require('express');
//create our app that we can attach middleware to and create routes and etc
const app = express();
//
const cors = require('cors');
app.use(cors());

//registering the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

//error handler
const { handle404s, errorHandler } = require('./errorHandling');
app.use('*', handle404s);
app.use(errorHandler);//errorhandler has to be the last thing

//start the app on port 4000 with a call back message
app.listen(4000, ()=> console.log("Always watching... on port 4000"));