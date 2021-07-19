// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando'
// }

// const chave = 'nome'
// console.log(pessoa[chave])
//?         Lucas
//todo =====================================================
// const pessoa1 = new Object()
// pessoa1.nome = 'Lucas'
// pessoa1.sobrenome = 'Fernando'

// const pessoa2 = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando'
// }

// console.log(pessoa1, pessoa2)
//?      { nome: 'Lucas', sobrenome: 'Fernando' }
//?      { nome: 'Lucas', sobrenome: 'Fernando' }
//todo =====================================================
// const pessoa1 = new Object()
// pessoa1.nome = 'Lucas'
// pessoa1.sobrenome = 'Fernando'
// pessoa1.falarNome = function () {
//     console.log(`${this.nome} está falando seu nome.`)
// }
// pessoa1.falarNome()
//?         Lucas está falando seu nome.
//todo =====================================================
// const pessoa1 = new Object()
// pessoa1.nome = 'Lucas'
// pessoa1.sobrenome = 'Fernando'
// pessoa1.idade = 32
// pessoa1.falarNome = function () {
//     return (`${this.nome} está falando seu nome.`)
// }
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// console.log(pessoa1.getDataNascimento())
//?         1989
//todo =====================================================
// const pessoa1 = new Object()
// pessoa1.nome = 'Lucas'
// pessoa1.sobrenome = 'Fernando'
// pessoa1.idade = 32
// pessoa1.falarNome = function () {
//     return (`${this.nome} está falando seu nome.`)
// }
// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }
//?         Lucas
//?         Fernando
//?         32
//?         [Function (anonymous)]
//?         [Function (anonymous)]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | factory function / constructor function / classes|
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.nomeCompleto)
//?         Lucas Fernando
//! ########################################################
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() { //? mudou aqui
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.nomeCompleto()) //? mudou aqui
//?         Lucas Fernando
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1)
//?         Pessoa { nome: 'Lucas', sobrenome: 'Fernando' }
//?         Pessoa é o nome do constructor em (function Pessoa) que fez o objeto
//todo =====================================================
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// }
// const p1 = new Pessoa('Lucas', 'Fernando')
// const p2 = new Pessoa('Pabline', 'Bressan')
// console.log(p1)
// console.log(p2)
//?         Pessoa { nome: 'Lucas', sobrenome: 'Fernando' }
//?         Pessoa { nome: 'Pabline', sobrenome: 'Bressan' }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// }
// const p1 = new Pessoa('Lucas', 'Fernando')
// p1.nome = 'Outra coisa'
// console.log(p1.nome)
//?         Outra coisa
//?         perceba que é uma constante e não tem como mudar...mas
//?         aqui foi alteredo o valor do valor da variavel

//!         explicação assim pode usando a const
//?         p1 = (ENDERECODEMEMORIA) => 'valor'
//?         p1.ENDERECODEMEMORIA = {nome: 'outra coisa'}
//! ########################################################
//!         já assim não usando a const
//!         assim da erro pois aqui está alterando a propria variavel
//?         p1 = 'outra coisa'
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | travando um objeto para não ser alterado |
//* funciona também com arrays
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// }
// const p1 = new Pessoa('Lucas', 'Fernando')
// Object.freeze(p1) //? Mudou aqui
// p1.nome = 'Outra coisa'
// console.log(p1.nome)
//?         Lucas
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | travando o objeto dentro da function construtora |
//* funciona também com arrays
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome

//     Object.freeze(this) //? mudou aqui
// }
// const p1 = new Pessoa('Lucas', 'Fernando')
// p1.nome = 'Outra coisa'
// console.log(p1.nome)
//?         Lucas
//?         perceba que mesmo tenho coloco para mudar, não mudou
//?         por causa do freeze no this
//! ########################################################
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome

//     Object.freeze(this)
// }
// const p1 = new Pessoa('Lucas', 'Fernando')
// p1.nome = 'Outra coisa'
// console.log(p1)
//?         Pessoa { nome: 'Lucas', sobrenome: 'Fernando' }
//todo =====================================================
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this)
}
const p1 = new Pessoa('Lucas', 'Fernando')
p1.nome = 'Outra coisa'
p1.sobrenome = 'QLQ'
p1.fala = function () {
    console.log('oi')
}
p1.fala()
//?         TypeError: p1.fala is not a function
//?         da erro pois não se pode criar mais nada após o freeze
//?         dentro da funcçao construtora
//todo =====================================================