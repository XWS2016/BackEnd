var http = require("http");

http.createServer(function (req, res) {
	res.writeHead(200, 	{'Content-Type': 'text/plain'});
	res.write('Hello\n');
	setTimeout(function () {
		//mozemo da saljemo velike kolicine podataka na klijenta
		//kroz chunkove
		res.end('World\n');
	},10000);
}).listen(8080);

console.log("server is running on port 8080");
