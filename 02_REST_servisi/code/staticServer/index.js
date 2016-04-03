var express = require('express');
var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
var app = express()
  .use(serveIndex(__dirname + '/static'))
  .use(serveStatic(__dirname + '/static'))
  .listen(3000);
console.log("server is running on port 3000");
