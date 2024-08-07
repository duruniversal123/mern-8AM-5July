const fs = require("fs");

fs.readdir("./data", function (err, files) {
  if (err) {
    console.log("Error reading in directory of data");
  } else {
    files.forEach(function (file) {
      fs.unlink(`./data/${file}`, function (err, data) {
        if (err) {
          console.log("error in file delete");
        }
      });
    });

    fs.rmdir("./data", function (err, data) {
      if (err) {
        console.log("error in directory delete");
      } else {
        console.log("yes directory deleted successfully");
      }
    });
  }
});
