const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

console.log("process.env.PORT", process.env.PORT);
const port = process.env.PORT;
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //it is userful to parse incoming JSON body request data in the application


//import router in server.js
const userRouter =require('./routes/user.route');

//call user.route
app.use("/",userRouter);



app.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});
