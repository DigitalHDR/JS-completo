// const produto = { nome: 'Caneca', preco: 1.8 }
// const outraCoisa = produto

// outraCoisa.nome = 'Lucas Fernando'
// console.log(produto)
// console.log(outraCoisa)
//?         { nome: 'Lucas Fernando', preco: 1.8 }
//?         { nome: 'Lucas Fernando', preco: 1.8 }
//?         alterando o valor dessa forma pode-se alterar o
//?         valor do objeto da const
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                  deixe o objeto original 
//*                  e com o operador spread
//*       copie esse valores para alterar em outra var
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// const outraCoisa = {...produto}

// outraCoisa.nome = 'Outra coisa'
// outraCoisa.preco = 2.5
// console.log(produto)
// console.log(outraCoisa)
//?         { nome: 'Caneca', preco: 1.8 }
//?         { nome: 'Outra coisa', preco: 2.5 }
///* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*    | adicionando outra chave (elemento) dentro da var spread  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// const outraCoisa = {
//     ...produto,
//     material: 'Porcelana'
// }

// outraCoisa.nome = 'Outra coisa'
// outraCoisa.preco = 2.5
// console.log(produto)
// console.log(outraCoisa)
//?         { nome: 'Caneca', preco: 1.8 }
//?         { nome: 'Outra coisa', preco: 2.5, material: 'Porcelana' }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  1°                  | Object.assign() |        (operador spread é melhor)
//* pode-se criar varios objeto dentro do parametro Object.assign
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// const caneca = Object.assign({}, produto)

// caneca.nome = 'Outra coisa'
// caneca.preco = 2.5
// console.log(produto)
// console.log(caneca)
//?         { nome: 'Caneca', preco: 1.8 }
//?         { nome: 'Outra coisa', preco: 2.5 }
//?         Object.assign() copia tudo que está dentro do objeto produto
//?         e coloca dentro de um objeto vazio, que no caso foi armazenado 
//?         dentro da var caneca
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   2°                 | Object.assign() |        (operador spread é melhor)
//* pode-se criar varios objeto dentro do parametro Object.assign
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// const caneca = Object.assign({}, produto, { material: 'porcelana'})

// caneca.nome = 'Outra coisa'
// caneca.preco = 2.5
// console.log(produto)
// console.log(caneca)
//?         { nome: 'Caneca', preco: 1.8 }
//?         { nome: 'Outra coisa', preco: 2.5, material: 'porcelana' }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | pegando um valor dentro o objeto manualmente |
//* é mais demorado mais pode ser útil a
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// const caneca = {nome: produto.nome, preco: produto.preco}

// console.log(produto)
// console.log(caneca)
//?         { nome: 'Caneca', preco: 1.8 }
//?         { nome: 'Caneca', preco: 1.8 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Object.freeze() |
//* na aula 90  também a respeito disso
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// Object.freeze(produto)
// produto.nome = 'Outro nome'

// console.log(produto)
//?         { nome: 'Caneca', preco: 1.8 }
//?         Object.freeze(), nao da pra alterar mais nada
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*         | Object.getOwnPropertyDescriptors() |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// console.log(Object.getOwnPropertyDescriptors(produto, 'nome'))
//*?         {
//?             nome: {
//?               value: 'Caneca',
//?               writable: true,
//?               enumerable: true,
//?               configurable: true
//?             },
//?             preco: { value: 1.8, writable: true, enumerable: true, configurable: true }
//?           }
//?         isso mostra todas as propriedade de cada chave dentro do objeto
//todo =====================================================
// const produto = { nome: 'Caneca', preco: 1.8 }
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptors(produto, 'nome',))
//*?         {
//?             nome: {
//?               value: 'Caneca',
//?               writable: false,
//?               enumerable: true,
//?               configurable: false
//?             },
//?             preco: { value: 1.8, writable: true, enumerable: true, configurable: true }
//?           }
//?         veja que somente writable e configurable mudaram para false
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Object.values() |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const produto = { nome: 'Caneca', preco: 1.8 }
// console.log(Object.values(produto))
//?         [ 'Caneca', 1.8 ]
//?         retorna somente os valores de cada chave(elemento)