let http = require('http');

http.createServer(function(req,res){
    if (req.url == '/') { //check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/healthz") {
        // Handle readiness and liveness probe request
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        return;
    }
    else
        res.end('Invalid Request!');
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello NodeJS from Muzikzz Org');
}).listen(3000, () => console.log('Server running on localhost:3000...')) ;
