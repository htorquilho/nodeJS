//importação dos módulos
const express = require('express');
const checkListRouter = require('./src/routes/checklist');

//criação de uma instância do aplicativo Express
const app = express();
//Middleware para análise de JSON
app.use(express.json());

//Roteamento
app.use('/checklists', checkListRouter);

//inicialização do servidor
app.listen(3000, () => {
    console.log('Servidor rodando...');
})

/*
const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/', (req, res) => {
    res.send('<h1>Lista de tarefas</h1>');
})

app.get('/json', (req, res) => {
    console.log(req.body);
    res.json({title: 'task', done: true});
})
*/
