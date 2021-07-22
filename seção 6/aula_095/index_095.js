// Produto
// Camiseta, Caneca, Lápis

// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.aumento = function (quantia) {
//     this.preco += quantia
// }

// Produto.prototype.desconto = function (quantia) {
//     this.preco -= quantia
// }

// //?>    >   >   >   >   >   >   >   >   >   >   >   >
// //?  essa função construtora vai usar as propriedades
// //?  da função construtora Produto e os prototype
// //?  aumento e desconto
// function Camiseta(nome, preco, cor) {
//     Produto.call(this, nome, preco)
// }

// const camiseta = new Camiseta('Regata', 7.5, 'Preta')
// console.log(camiseta)
//?         Camiseta { nome: 'Regata', preco: 7.5 }
//?>    >   >   >   >   >   >   >   >   >   >   >   >
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco) {
//     this.nome = nome
//     this.preco = preco
// }

// Produto.prototype.aumento = function (quantia) {
//     this.preco += quantia
// }

// Produto.prototype.desconto = function (quantia) {
//     this.preco -= quantia
// }

// function Camiseta(nome, preco, cor) {
//     Produto.call(this, nome, preco)
// }

// Camiseta.prototype = Object.create(Produto.prototype)
// Camiseta.prototype.constructor = Camiseta

// const produto = new Produto('Gen', 111)

// const camiseta = new Camiseta('Regata', 7.5, 'Preta')

// console.log(produto)

// console.log(camiseta)
//?         NO GOOGLE CHROME >>>>>>
// Produto {nome: "Gen", preco: 111} //?         
// nome: "Gen"
// preco: 111
// __proto__:
// aumento: ƒ (quantia)
// desconto: ƒ (quantia)
// constructor: ƒ Produto(nome, preco) //?         
// __proto__: Object
//?         >>>>>>>>>>>>>>>>>>>>>>>>>
//! ########################################################
//?         NO GOOGLE CHROME >>>>>>
// Camiseta {nome: "Regata", preco: 7.5} //?         
// nome: "Regata"
// preco: 7.5
// __proto__: Produto
// constructor: ƒ Camiseta(nome, preco, cor) //?         
// __proto__:
// aumento: ƒ (quantia)
// desconto: ƒ (quantia)
// constructor: ƒ Produto(nome, preco) //?         
// __proto__: Object
//?         >>>>>>>>>>>>>>>>>>>>>>>>>
//todo =====================================================
function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia
}

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')

console.log(produto)
console.log(camiseta)
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//?         13:58
//! ########################################################
//! PAREI NESSA PARTE DO VÍDEO