//todo =====================================================
//?         COISA QUE TEM EM UMA API
//?         CRUD
//?         creat,      read,       update,     delete
//?         POST,       GET,        PUT,        DELETE
//?         crair,      ler,        atualizar,  apagar

//?     http://meusite.com/ <- GET -> entregue a página
//?     http://meusite.com/sobre <- GET -> entregue a página /sobre
//?     http://meusite.com/contato <- GET -> entregue a página /contato
//todo =====================================================
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `)
})

app.post('/', (req, res) => {   //? vai aparecer isso depois de app.get
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(3000, () => {
    console.log('Acessa http://localhost:3000')
    console.log('Servidor express com nodejs rodando')
})