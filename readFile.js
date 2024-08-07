const fs=require("fs");

fs.readFile("./wednesday.txt",function(err,data){
       if(err){
        console.log("error in reading the file",err)
       }
       else{
        console.log(`the file data is ${data}`,data.length);
       }
});