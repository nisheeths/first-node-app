const http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world \n');
}).listen(8081);

console.log('Server running at localhost:8081');