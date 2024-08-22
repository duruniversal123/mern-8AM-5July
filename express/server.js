const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

console.log("process.env.PORT", process.env.PORT);
const port = process.env.PORT;
const bodyParser = require("body-parser");
app.use(bodyParser.json()); //it is userful to parse incoming JSON body request data in the application

//get request,Api, end-points,url,route
app.get("/", function (req, res) {
  res.send({ message: "Welcome to all my students!", status: true }); //success
});

//get home request
app.get("/home", function (req, res) {
  res.send({ message: "welcome to all at home page", status: true });
});

//get about request
app.get("/about", function (req, res) {
  res.send({ message: "welcome to all at about page", status: true });
});

//get users request
app.get("/users", function (req, res) {
  res.send({ message: "fetched all users successfully!", status: true });
});

const users = [
  { id: 1, name: "durgesh", email: "durgesh@gmail.com" },
  { id: 2, name: "rohit", email: "rohit@gmail.com" },
  { id: 3, name: "virat", email: "virat@gmail.com" },
  { id: 4, name: "warner", email: "warner@gmail.com" },
  { id: 5, name: "williamson", email: "williamson@gmail.com" },
];
//get specific user data request api
app.get("/get-user/:id", function (req, res) {
  console.log("req.params: ", req.params.id);
  const data=users.filter((user)=>{
    return user.id == req.params.id
  })
  res.send({message:"specific user fetched successfully",status:1,user:data});
});

//post register api /register is api path
app.post("/register", function (req, res) {
  console.log("req.body", req.body);
  const { firstname, lastname, username, password } = req.body;
  console.log("firstname", firstname);
  console.log("lastname", lastname);
  console.log("username", username);
  console.log("password", password);
  if (firstname && lastname && username && password) {
    res.send({ message: "user registration successfully", status: 1 });
  } else {
    res.send({ message: "user registration failed", status: 0 });
  }
});
//login post request api
app.post("/login", function (req, res) {
  const { username, password } = req.body;
  if (username && password) {
    res.send({ message: "user login successfully", status: 1 });
  } else {
    res.send({ message: "user login failed", status: 0 });
  }
});

app.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});
