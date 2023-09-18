//importação do módulo http
const http = require('http');

//criação do servidor
const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    res.statusCode = 200;
    res.end('<h1>O Servidor tá ON!</h1>');
    //manipulação de solicitações
});

//inicialização do servidor
server.listen(3000, () => {
    console.log('Servidor funcionando')
});
