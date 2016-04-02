var http = require('http');
var fs = require('fs');
var path = require('path');

var send404 = function(response) {
  response.writeHead(404, {
    'Content-Type': 'text/plain'
  });
  response.write('Error 404: Resource not found.');
  response.end();
};

http.createServer(function(req, res) {
  if (req.method == 'GET') {
    var fileurl;
    if (req.url == '/') fileurl = '/index.html';
    else fileurl = req.url;
    var filepath = path.resolve('./static' + fileurl);

    fs.exists(filepath, function(exists) {
      if (!exists) {
        send404(res);
        return;
      }
      if(fileurl.substr(-3)==='css'){
        res.writeHead(200, {
          'content-type': 'text/css'
        });        
      }
      else{
        res.writeHead(200, {
          'content-type': 'text/html'
        });
      }
      fs.createReadStream(filepath).pipe(res);
    });
  } else {
    send404(res);
  }
}).listen(8080);

console.log("Server is running on port 8080");
