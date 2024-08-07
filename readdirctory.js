const fs=require('fs');

fs.readdir("./data",function(err, files){
    if(err){
        console.log("Error in reading the directory");
    }
    else{
        console.log("the files in the directory",files[0]);
    }
})