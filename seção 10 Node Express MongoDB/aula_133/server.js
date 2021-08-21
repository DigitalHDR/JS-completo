const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
    console.log('Acessa http://localhost:3000')
    console.log('Servidor express com nodejs rodando')
})