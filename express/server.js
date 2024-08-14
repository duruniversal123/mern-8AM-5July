const express= require('express');
const app= express();
const port=9000;

//get request,Api, end-points,url,route
app.get("/",function(req,res){
       res.send({message:"Welcome to all my students!",status:true});//success
});

//get home request
app.get("/home",function(req,res){
    res.send({message:"welcome to all at home page",status:true});
});



//get about request
app.get("/about",function(req,res){
    res.send({message:"welcome to all at about page",status:true});
});

//get users request
app.get("/users",function(req,res){
    res.send({message:"fetched all users successfully!",status:true});
});


app.listen(port,function(){
    console.log(`server running on http://localhost:${port}`)
});