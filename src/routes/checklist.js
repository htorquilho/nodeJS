//importação do módulo express
const express = require('express');

//criação do roteador
const router = express.Router();

//definição de rotas
router.get('/', (req, res) => {
    //manipulação das solicitações e respostas
    console.log('rota get funcionando');
    res.send();
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})

router.get('/:id', (req, res) => {
    console.log(req.body);
    res.send(`GET ID: ${req.params.id}`); //uso de parâmetros dinâmicos
})

router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`PUT ID: ${req.params.id}`);
})

router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.send(`DELETE ID: ${req.params.id}`);
})

module.exports = router;
