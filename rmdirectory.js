const fs=require('fs');

fs.rmdir("./data", function(err, data){
    if(err){
        console.log("error in directory delete");
    }
    else{
         console.log("yes directory deleted successfully");
    }
})