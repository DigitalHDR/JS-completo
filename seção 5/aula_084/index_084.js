// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// function callbackFilter(valor) {
//     return valor > 10
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)
//?         [ 50, 80, 11, 22, 27 ]
//?         quando for valor booleano, true e false vc pode fazer direto
//?         sem usar if e else
//! ########################################################
//!             MANEIRA MAIS LONGA COM IF
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// function callbackFilter(valor) {
//     if (valor > 10) {
//         return true
//     } else {
//         return false
//     }
// }

// const numerosFiltrados = numeros.filter(callbackFilter)
// console.log(numerosFiltrados)
//?         [ 50, 80, 11, 22, 27 ]
//?         aqui o metodo filter vai executar a função callbackFilter
//?         e retornar todo elemento mais que 10, e trazar para uma nova array
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | com função anônima |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

// const numerosFiltrados = numeros.filter(function(valor) {
//     return valor > 10
// })
// console.log(numerosFiltrados)
//?         [ 50, 80, 11, 22, 27 ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | com arrow function |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

// const numerosFiltrados = numeros.filter((valor) => {
//     return valor > 10
// })
// console.log(numerosFiltrados)
//?         [ 50, 80, 11, 22, 27 ]
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

// const numerosFiltrados = numeros.filter(valor => {
//     return valor > 10
// })
// console.log(numerosFiltrados)
//?         [ 50, 80, 11, 22, 27 ]
//?         como só tem um valor dentro do parametro pode se
//?         retirar os parenteses
//todo ====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]

// const numerosFiltrados = numeros.filter(valor => valor > 10)
// console.log(numerosFiltrados)
//?         [ 50, 80, 11, 22, 27 ]
//?         aqui fica menor ainda
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor)
//     return valor > 10
// })

// console.log(numerosFiltrados)
//?         5
//?         50
//?         80
//?         1
//?         2
//?         3
//?         5
//?         8
//?         7
//?         11
//?         22
//?         27
//?         [ 50, 80, 11, 22, 27 ]
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice)
//     return valor > 10
// })

// console.log(numerosFiltrados)
//?         5 0
//?         50 1
//?         80 2
//?         1 3
//?         2 4
//?         3 5
//?         5 6
//?         8 7
//?         7 8
//?         11 9
//?         22 10
//?         27 11
//?         [ 50, 80, 11, 22, 27 ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//?         Retorne as pessoas que tem o nome com 5 letras ou mais
//?         Retorna as pessoas com mais de 25 anos
//?         Retorna as pessoas cujo nome termina com a letra a
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 26 },
//     { nome: 'Becky', idade: 21 },
//     { nome: 'Júlia', idade: 30 },
//     { nome: 'Renata', idade: 33 },
// ]

// const pesssoasComNomeGrande = pessoas.filter(function(valor) {
//     console.log(valor)
// })
//?         { nome: 'Lucas', idade: 32 }
//?         { nome: 'Pabline', idade: 19 }
//?         { nome: 'Ana', idade: 26 }
//?         { nome: 'Becky', idade: 21 }
//?         { nome: 'Júlia', idade: 30 }
//?         { nome: 'Renata', idade: 33 }
//todo =====================================================
// const pessoas = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 26 },
//     { nome: 'Becky', idade: 21 },
//     { nome: 'Júlia', idade: 30 },
//     { nome: 'Renata', idade: 33 },
// ]

// const pesssoasComNomeGrande = pessoas.filter(function(valor) {
//     console.log(valor.nome)
// })
//?         Lucas
//?         Pabline
//?         Ana
//?         Becky
//?         Júlia
//?         Rena
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  1° | Retorne as pessoas que tem o nome com 5 letras ou mais |
//*         com arrow function reduzida
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 26 },
//     { nome: 'Becky', idade: 21 },
//     { nome: 'Júlia', idade: 30 },
//     { nome: 'Renata', idade: 33 },
// ]

// const pesssoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
// console.log(pesssoasComNomeGrande)
//?         [
//?             { nome: 'Lucas', idade: 32 },
//?             { nome: 'Pabline', idade: 19 },
//?             { nome: 'Becky', idade: 21 },
//?             { nome: 'Júlia', idade: 30 },
//?             { nome: 'Renata', idade: 33 }
//?           ]
//?         nesse caso somente ana foi removido
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | Retorna as pessoas com mais de 25 anos |
//* para numeros no caso idade é só retirar o length
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 26 },
//     { nome: 'Becky', idade: 21 },
//     { nome: 'Júlia', idade: 30 },
//     { nome: 'Renata', idade: 33 },
// ]

// const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 25)
// console.log(pessoasComMaisDeCinquentaAnos)
//?         [
//?           { nome: 'Lucas', idade: 32 },
//?           { nome: 'Ana', idade: 26 },
//?           { nome: 'Júlia', idade: 30 },
//?           { nome: 'Renata', idade: 33 }
//?         ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                     endsWith()
//*  | Retorna as pessoas cujo nome termina com a letra a |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 26 },
//     { nome: 'Becky', idade: 21 },
//     { nome: 'Júlia', idade: 30 },
//     { nome: 'Renata', idade: 33 },
// ]

// const pessoasComLetraFinal_A = pessoas.filter(function (valor) {
//     return valor.nome.toLowerCase().endsWith('a')
// })
// console.log(pessoasComLetraFinal_A)
//?         [
//?             { nome: 'Ana', idade: 26 },
//?             { nome: 'Júlia', idade: 30 },
//?             { nome: 'Renata', idade: 33 }
//?           ]
//! ########################################################
//! CÓDIGO MENOR
const pessoas = [
    { nome: 'Lucas', idade: 32 },
    { nome: 'Pabline', idade: 19 },
    { nome: 'Ana', idade: 26 },
    { nome: 'Becky', idade: 21 },
    { nome: 'Júlia', idade: 30 },
    { nome: 'Renata', idade: 33 },
]

const pessoasComLetraFinal_A = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))
console.log(pessoasComLetraFinal_A)