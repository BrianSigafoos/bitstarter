var fs = require('fs');
var express = require('express');
var port = process.env.PORT || 4000;

var herokuAppUrl = "http://photolearn.herokuapp.com/"
var domainUrl= "http://www.photolearnapp.com"

var app = express.createServer(express.logger());

// for Startup class renamed request and response to req, res
app.get('/', function(req, res) {
  var buf = fs.readFileSync('index.html');
  res.send(buf.toString());
});

app.configure('production', function() {
  // keep this relative to other middleware, e.g. after auth but before
  // express.static()
  app.get('*', function(req, res, next) {
    if (req.headers.host != process.env.APP_HOST) {
      res.redirect('http://' + process.env.APP_HOST + req.url, 301)
    } else {
      next()
    }
  })
  app.use(express.static(path.join(application_root, 'static')))
})

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

