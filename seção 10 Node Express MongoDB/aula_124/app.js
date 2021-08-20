// const mod1 = require('./mod1')
// console.log(mod1)
// //?{
//   Nome: 'Lucas',
//   sobrenome: 'Fernando',
//   falaNome: [Function: falaNome],
//   qualquerCoisa: 'O que eu quiser exportar'
// //?}
//?         aqui exportou tudo que estava em mod1
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | executando uma função exportada |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const mod1 = require('./mod1')
// console.log(mod1.falaNome())
//?Lucas Fernando
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const falaNome = require('./mod1').falaNome
// console.log(falaNome())
//? Lucas Fernando
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome
// console.log(falaNome())
//?Lucas Fernando
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const { nome, sobrenome, falaNome } = require('./mod1')
// console.log(falaNome())
//?Lucas Fernando
//todo =====================================================
// const { nome, sobrenome, falaNome } = require('./mod1')
// console.log(nome, sobrenome)
// console.log(falaNome())
//?Lucas Fernando
//?Lucas Fernando
//todo =====================================================
// const { Pessoa } = require('./mod1')

// const p1 = new Pessoa('Lucas')
// console.log(p1)
//?Pessoa { nome: 'Lucas' }
//todo =====================================================
// const path = require('path') //? pacote nativo do NodeJS não precisa colocar o caminho
// const axios = require('axios') //? pacote nativo do NodeJS não precisa colocar o caminho
// const { Pessoa } = require('./mod1')

// console.log(Pessoa)
//?         [class Pessoa]
//todo =====================================================
// const path = require('path') //? pacote nativo do NodeJS não precisa colocar o caminho
// const axios = require('axios') //? pacote nativo do NodeJS não precisa colocar o caminho
// const { Pessoa } = require('./mod1')

// const p1 = new Pessoa('Ana')
// console.log(p1)
//?         Pessoa { nome: 'Ana' }
//todo =====================================================
const path = require('path') //? pacote nativo do NodeJS não precisa colocar o caminho
const axios = require('axios') //? pacote nativo do NodeJS não precisa colocar o caminho
const { Pessoa } = require('./mod1')

const p1 = new Pessoa('Ana')
console.log(p1)