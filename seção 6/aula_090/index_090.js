// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | defineProperty() |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco
//     this.estoque = estoque

//     Object.defineProperty(this, 'estoque', {

//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | defineProperty() enumerable |
//* mostra a
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco


//     Object.defineProperty(this, 'estoque', {
//         enumerable: true //? mudou aqui
//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: undefined }
//?         perceba que o parametro estoque foi exibido, mais não tem valor
//?         dentro do objeto e nem foi criado dentro do objeto e nem chamado
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | defineProperty() value |
//* valor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco


//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque, //? mudou aqui        
//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
//?         assim o valor que exibido.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | defineProperty() writable: false |
//* pode ser alterar
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco


//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: false //? mudou aqui       
//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// p1.estoque = 10000 //? mudou aqui
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: 3 }
//?         perceba que o valor usando writable: false, não pode ser alterado
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | defineProperty() writable: true |
//* pode ser alterar
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco


//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: true //? mudou aqui       
//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// p1.estoque = 10000
// console.log(p1)
//?         Produto { nome: 'Camiseta', preco: 20, estoque: 10000 }
//?         writable: true, assim é possível alterar
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | defineProperty() configurable: false |
//* configuravel, false não da pra apagar 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco


//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: true,
//         configurable: false    
//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// p1.estoque = 10000
// console.log(p1)
//? configuravel, false não da pra apagar 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Object.keys() |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Produto(nome, preco, estoque) {
//     this.nome = nome
//     this.preco = preco


//     Object.defineProperty(this, 'estoque', {
//         enumerable: true,
//         value: estoque,
//         writable: true,
//         configurable: false    
//     })
// }

// const p1 = new Produto('Camiseta', 20 , 3)
// p1.estoque = 10000
// console.log(Object.keys(p1))
//?         [ 'nome', 'preco', 'estoque' ]
//todo =====================================================