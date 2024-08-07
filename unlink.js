const fs=require('fs');

fs.unlink("./data/users.txt",function(err,data){
    if(err){
        console.log("error in file delete");
    }else{
        console.log("file deleted successfully");
    }
})