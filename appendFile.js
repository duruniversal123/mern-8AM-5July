const fs=require("fs");

fs.appendFile("./wednesday.txt","\n ans: -Sir we are good ,about you.",function(err,data){
       if(err){
        console.log("error in append data the file",err)
       }
       else{
        console.log(`the data append successfully in the existing file ${data}`);
       }
});