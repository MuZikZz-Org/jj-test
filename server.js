const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    } else if (req.url === '/healthz') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>Healthy</p></body></html>');
        res.end();
        // res.writeHead(200, { 'Content-Type': 'text/plain' });
        // res.end('OK');
    } else {
        res.end('Invalid Request!');
    }
});

server.listen(3000, () => {
    console.log('Server running on Port 3000...');
});

