const http = require("http");
const port = 9001;
http
  .createServer(function (req, res) {
    console.log("req.url", req.url);
    if (req.url == "/") {
      res.write("Welcome you are on / root page");
      res.end();
    }
    else if(req.url=="/home"){
      res.write("Welcome you are on /home page");
      res.end();
    }
    else if(req.url=="/about"){
      res.write("Welcome you are on /about page");
      res.end();
    }
    else if(req.url=="/contact"){
      res.write("Welcome you are on /contact page");
      res.end();
    }
    else if(req.url=="/login"){
      res.write("Welcome you are on /login page");
      res.end();
    } 
    else{
      res.write("page not found");
      res.end();
    }
    
  })
  .listen(port, function () {
    console.log(`listening on port ${port} http://localhost:${port}`);
  });

//req:-request object, it is always first argument
//res:- response object
