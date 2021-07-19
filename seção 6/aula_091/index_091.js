// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //? mostra a chave
//         value: estoque, //? valor
//         writable: true, //? pode alterar
//         configurable: true //? configurável
//     })
// }

// const p1 = new Produto('Camiseta', 20, 3)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Getters |
//* pega o valor e mostra
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //? mostra a chave
//         configurable: true, //? configurável
//         get: function () {
//             return estoque
//         }
//     })
// }

// const p1 = new Produto('Camiseta', 20, 3)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: [Getter] }
//?         agora estoque é um getter que vai retornar um valor
//todo =====================================================
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //? mostra a chave
//         configurable: true, //? configurável
//         get: function () {
//             return estoque
//         }
//     })
// }

// const p1 = new Produto('Camiseta', 20, 3)
// console.log(p1)
// console.log(p1.estoque)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: [Getter] }
//?         3
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Setters |
//* modifica o valor
//* no setters vai validar esse valor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //? mostra a chave
//         configurable: true, //? configurável
//         get: function () {
//             return estoque
//         },
//         set: function (valor) {
//             console.log(valor)
//         }
//     })
// }

// const p1 = new Produto('Camiseta', 20, 3)

// p1.estoque = 'O valor que eu quero'
// console.log(p1.estoque)
//?         O valor que eu quero
//?         3
//todo =====================================================
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //? mostra a chave
//         configurable: true, //? configurável
//         get: function () {
//             return estoque
//         },
//         set: function (valor) {
//             console.log(valor)
//         }
//     })
// }

// function criaProduto(nome) {
//     return {
//         get nome() {
//             return nome
//         },
//         set nome(valor) {
//             nome = valor
//         }
//     }
// }

// const p2 = criaProduto('Camiseta')
// p2.nome = 'Qualquer coisa'
// console.log(p2.nome)
//?         Qualquer coisa
//todo =====================================================
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, //? mostra a chave
//         configurable: true, //? configurável
//         get: function () {
//             return estoque
//         },
//         set: function (valor) {
//             console.log(valor)
//         }
//     })
// }

// function criaProduto(nome) {
//     return {
//         get nome() {
//             return nome
//         },
//         set nome(valor) {
//             valor = valor.replace('coisa', '') //? mudou aqui
//             nome = valor
//         }
//     }
// }

// const p2 = criaProduto('Camiseta')
// p2.nome = 'Qualquer coisa'
// console.log(p2.nome)
//?         Qualquer
//todo =====================================================