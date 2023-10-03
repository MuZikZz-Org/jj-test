let http = require('http');

http.createServer(function(req,res){
    if (req.url == '/') { //check the URL of the current request
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/hello") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Hello JJ</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end('Hello NodeJS from Muzikzz Org');
}).listen(5678, () => console.log('Server running on localhost:5678...')) ;
