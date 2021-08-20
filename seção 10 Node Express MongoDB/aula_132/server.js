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
// http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila
//?     ? signigica que está no começo, que está iniciando uma query string
//?     & significa que está continuando o query

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send(`
//     <form action="/" method="POST">
//     Nome do cliente: <input type="text" name="nome">
//     <button>Olá mundo</button>
//     </form>
//     `)
// })

// app.get('/testes/:idUsuarios?/:parametro?/:outraCoisa', (req, res) => {
//     console.log(req.params)
//     res.send(req.params.idUsuarios)
// })

// app.post('/', (req, res) => {
//     res.send('Recebi o formulário')
// })

// app.listen(3000, () => {
//     console.log('Acessa http://localhost:3000')
//     console.log('Servidor express com nodejs rodando')
// })

//?     { idUsuarios: '123', parametro: 'fdsgfd', outraCoisa: 'aff' }
//todo =====================================================
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`) //? name é o mesmo do input acima em name="nome"
})

app.listen(3000, () => {
    console.log('Acessa http://localhost:3000')
    console.log('Servidor express com nodejs rodando')
})