const express = require("express");

const multer = require("multer");

const fs=require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) { 
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


const router = express.Router();

//get request,Api, end-points,url,route
router.get("/", function (req, res) {
  res.send({ message: "Welcome to all my students!", status: true }); //success
});

//get home request
router.get("/home", function (req, res) {
  res.send({ message: "welcome to all at home page", status: true });
});

//get about request
router.get("/about", function (req, res) {
  res.send({ message: "welcome to all at about page", status: true });
});

//post profile request
router.post("/profile", upload.single("image"), function (req, res) {
  console.log("req", req.file);
  if (req.file.originalname) {
    res.send({ message: "file data recieved", status: true });
  } else {
    res.send({ message: "file data not recieved", status: false });
  }
});

const users = [
  { id: 1, name: "durgesh", email: "durgesh@gmail.com" },
  { id: 2, name: "rohit", email: "rohit@gmail.com" },
  { id: 3, name: "virat", email: "virat@gmail.com" },
  { id: 4, name: "warner", email: "warner@gmail.com" },
  { id: 5, name: "williamson", email: "williamson@gmail.com" },
];

//get users request
router.get("/users", function (req, res) {
  res.send({
    message: "fetched all users successfully!",
    status: true,
    data: users,
  });
});
//get specific user data request api
router.get("/get-user/:id", function (req, res) {
  console.log("req.params: ", req.params.id);
  const data = users.filter((user) => {
    return user.id == req.params.id;
  });
  res.send({
    message: "specific user fetched successfully",
    status: 1,
    user: data,
  });
});

//post register api /register is api path
router.post("/register", function (req, res) {
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
router.post("/login", function (req, res) {
  const { username, password } = req.body;
  if (username && password) {
    res.send({ message: "user login successfully", status: 1 });
  } else {
    res.send({ message: "user login failed", status: 0 });
  }
});


//request to get image data
router.get('/user-profile', function(req, res) {
       fs.readFile('./uploads/Screenshot from 2023-01-07 18-42-40.png',function(err,data){
        if(data){
          res.send(data);
        }
       });
})

module.exports = router;
