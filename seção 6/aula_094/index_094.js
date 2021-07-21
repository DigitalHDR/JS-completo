//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* COLOCAR TODOS OS METODOS FORA DA FUNÇÃO CONSTRUTORA
//* ASSIM O DESEMPENHO É MAIOR
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //? new Object => Object.prototype
// const objA = {
//     chaveA: 'A'
//     //? __proto__: Object.prototype 
// }

//?         NO GOOGLE CHROME
//?         objA
//?         {chaveA: "A"}
//todo =====================================================
// //? new Object => Object.prototype
// const objA = {
//     chaveA: 'A'
//     //? __proto__: Object.prototype 
// }

//?         NO GOOGLE CHROME
//?         objA.__proto__ === Object.prototype
//?         true
//todo =====================================================
// //? new Object => Object.prototype
// const objA = {
//     chaveA: 'A'
//     //? __proto__: Object.prototype 
// }

// //? new Object => Object.prototype
// const objB = {
//     chaveB: 'B'
//     //? __proto__: Object.prototype 
// }

// Object.setPrototypeOf(objB, objA)
// console.log(objB.chaveA)
//?         A
//?         perceba que pode-se usar a chave do A no objB
//todo =====================================================
// //? new Object => Object.prototype
// const objA = {
//     chaveA: 'A'
//     //? __proto__: Object.prototype 
// }

// //? new Object => Object.prototype
// const objB = {
//     chaveB: 'B'
//     //? __proto__: Object.prototype 
// }

// //? new Object => Object.prototype
// const objC = {
//     chaveC: 'C'
//     //? __proto__: Object.prototype 
// }


// Object.setPrototypeOf(objB, objA)
// Object.setPrototypeOf(objC, objB)
// console.log(objC.chaveA)

//?         NO GOOGLE CHROME
//?         objC.chaveA
//?         "A"
//?         facara igual uma corrente pois, oobjC tem todos os obj de C,B e A
//?         objB Tera os obj de A
//! ########################################################
//! ########################################################
//! ########################################################
//! ########################################################
//! NÃO USAR A PROPRIEDADE __proto__
//! TEM PERDA O DESEMPENHO
//! ########################################################
//! ########################################################
//! ########################################################
//! ########################################################
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.desconto = function (percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 10))
// }

// Produto.prototype.aumento = function (percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 10))
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p1 = new Produto('Camiseta', 50)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 50 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* LOGICA PARA (DENCONTO) OU (AUMENTO) DE PORCENTAGEM
//* DESCONTO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.desconto = function (percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 100))
// }

// Produto.prototype.aumento = function (percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p1 = new Produto('Camiseta', 50)
// p1.desconto(100)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 0 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* LOGICA PARA (DENCONTO) OU (AUMENTO) DE PORCENTAGEM
//* AUMENTO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.desconto = function (percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 100))
// }

// Produto.prototype.aumento = function (percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p1 = new Produto('Camiseta', 50)
// p1.aumento(100)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 100 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* aqui o setPrototypeOf é setado após criar um novo produto
//* no caso p2
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.desconto = function (percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 100))
// }

// Produto.prototype.aumento = function (percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p1 = new Produto('Camiseta', 50)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p2 = {
//     nome: 'Caneca',
//     preco: 15
// }
// Object.setPrototypeOf(p2, Produto.prototype)

// p2.aumento(10)
// console.log(p1)
// console.log(p2)
//?         Produto { nome: 'Camiseta', preco: 50 }
//?         Produto { nome: 'Caneca', preco: 16.5 }

//?         Perceba que p2 está agora com as propriedades do
//?         (Produto.prototype), assim pode usar essas propriedades
//?         para fazer o aumento do preço em 10 %

//?         perceba tambem que o nome da função construtora Produto 
//?         é exibido como se fosse do proprio p2 (mais não é),
//?         isso foi possivel, usando setPrototypeOf
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*           | usando o setPrototypeOf diretamente |
//* veja em p3
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.desconto = function (percentual) {
//     this.preco = this.preco - (this.preco * (percentual / 100))
// }

// Produto.prototype.aumento = function (percentual) {
//     this.preco = this.preco + (this.preco * (percentual / 100))
// }

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p1 = new Produto('Camiseta', 50)

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p2 = {
//     nome: 'Caneca',
//     preco: 15
// }
// Object.setPrototypeOf(p2, Produto.prototype)

// //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const p3 = Object.create(Produto.prototype)
// p3.preco = 25
// p3.aumento(100)

// console.log(p3)
//?         Produto { preco: 50 }