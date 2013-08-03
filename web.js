var fs = require('fs');
var express = require('express');
var port = process.env.PORT || 8080;

var herokuappname = "photolearn"
var domainname = "www.photolearnapp.com"

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync('index.html');
  if (request == "http://photolearn.herokuapp.com"){response.redirect('http://www.photolearn.com');}
  else {response.send(buf.toString());}
});

// express is serving /public/css /public/js etc now
// instead of loading from external urls
// from https://github.com/spadin/simple-express-static-server/blob/master/server.js
// commented out parts that I wasn't sure about their use
app.configure(function(){
//    app.use(express.methodOverride());
//    app.use(express.bodyParser());
    app.use(express.static(__dirname + '/public'));
//    app.use(express.errorHandler({
//        dumpExceptions: true,
//        showStack: true
//    }));
//    app.use(app.router);
});

app.listen(port, function() {
  console.log("Listening at localhost:" + port);
});

