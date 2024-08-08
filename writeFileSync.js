const fs = require("fs");
const http = require("http");
http
  .createServer(function (req, res) {
    const err = fs.writeFileSync(
      "./test/test.js",
      "console.log('hello world')"
    );
    console.log(err);
    if(err){
        res.end(err);
    }
    else{
    res.end("write file successfully by writeFileSync");
    }
  })
  .listen(9002, function () {
    console.log("server listening on http://localhost:9002");
  });
