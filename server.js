const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.end('<h1>O Servidor tá ON!</h1>');
});

server.listen(3000, () => {
    console.log('Servidor funcionando')
});