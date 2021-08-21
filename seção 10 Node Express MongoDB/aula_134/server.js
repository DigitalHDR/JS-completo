const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({ extended: true }))

//! ########################################################
//? caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'))

//? caminha relativo
// app.set('views', './src/views')
//! ########################################################

app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
    console.log('Acessa http://localhost:3000')
    console.log('Servidor express com nodejs rodando')
})