//?         Some todos os Números (reduce)
//?         Retorne um array com os pares (filter)
//?         Retorne um array com o dobro dos valores (Map)
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     console.log(acumulador)
// }, 0)
//?         0
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         undefined
//?         está tanto undefined porque deve-se retornar um valor qualquer
//?         para cada interação do laço
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     console.log(acumulador)
//     return acumulador
// }, 0)
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//?         0
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     console.log(acumulador, valor)
//     return acumulador
// }, 0)
//?         0 5
//?         0 50
//?         0 80
//?         0 1
//?         0 2
//?         0 3
//?         0 5
//?         0 8
//?         0 7
//?         0 11
//?         0 22
//?         0 27
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | Some todos os Números (reduce) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor //? acululador = acumulador + valor
//     console.log(acumulador, valor)
//     return acumulador
// }, 0)
//?         5 5         //?  5+50 = 55       
//?         55 50       //?  55+80 = 135
//?         135 80      //?  135+1 = 136
//?         136 1       //?  136+2 = 138
//?         138 2       //?  138+3 = 141
//?         141 3       //?  ... 
//?         146 5       //?  ... 
//?         154 8       //?  ... 
//?         161 7       //?  ... 
//?         172 11      //?  e assim vai até o último
//?         194 22      //?  ... 
//?         221 27      //?  ... 
//todo =====================================================
//todo  é mais facil usar filter
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador += valor //? acululador = acumulador + valor
//     return acumulador
// }, 0)
// console.log(total)
//?         221
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | Retorne um array com os pares, DA PARA FAZER TAMBÉM COM  (filter) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//todo  é mais facil usar filter
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor)
//     return acumulador
// }, [])
// console.log(total)
//?         [ 50, 80, 2, 8, 22 ]
//?         acumulador.push(valor) isso inseri no acumulador o valor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*    | para achar os impares é só colocar !== |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//todo  é mais facil usar filter
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 !== 0) acumulador.push(valor)
//     return acumulador
// }, [])
// console.log(total)
//?         [
//?             5,  1,  3, 5,
//?             7, 11, 27
//?           ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | divisivel por 8 |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 8 === 0) acumulador.push(valor)
//     return acumulador
// }, [])
// console.log(total)
//?         [ 80, 8 ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | Retorne um array com o dobro dos valores, DA PARA FAZER TAMBÉM COM (Map)|
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador.push(valor * 2)
//     return acumulador
// }, [])
// console.log(total)
//?         [
//?             10, 100, 160,  2,  4,
//?              6,  10,  16, 14, 22,
//?             44,  54
//?           ]
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if (valor % 2 === 0) {
//         acumulador += valor
//     }
//     return acumulador
// }, )
// console.log(total)
//?         162
//?         para soma de todos os numeros pares
//?         teve-se colocar zero ali no final, para começar com esse número
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if (valor % 2 !== 0) {
//         acumulador += valor
//     }
//     return acumulador
// }, )
// console.log(total)
//?         59
//?         soma de todos números impares
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Retorne a pessoa mais velha
const pessoa = [
    { nome: 'Lucas', idade: 32 },
    { nome: 'Pabline', idade: 19 },
    { nome: 'Becky', idade: 14 },
    { nome: 'Ana', idade: 29 },
    { nome: 'Kim', idade: 38 },
]

const maisVelha = pessoa.reduce(function (acumulador, valor, indice, array) {
    if (acumulador.idade > valor.idade) return acumulador
        return valor
})
console.log(maisVelha)
//?         { nome: 'Kim', idade: 38 }

//?         Explicação da logica dentro do if
//?         lembrando que acululador é cada elemento(não é o valor e nem o indice)

//?         a idade do 1° elemento(lucas) é maior do que a idade do 2° elemento(pabline)
//?         no caso é, então esse valor vai ser retornado dentro do acululador.(32)

//?         novamento a idade do 1° elemento(lucas) é maior que a idade do 3° elemento(becky).
//?         sim, o valor (32) novamente é mair então é retornado novamente para acululador

//?         1° elemento idade é maior que a idade do 4° elemento?
//?         sim retorna para idade do 1° elemento para acululador novamente

//?         e assim vai até chegar no último, caso algum elemento tenha a idade maior que a
//?         idade do 1° elemento(lucas), então essa vai ficar no lugar do 1° elemento e será
//?         retornado para dentro do acumulador
//?         no caso vejá que o último o 5° elemento tem idade de 38 e é maior quea idade 
//?         do  1° elemento então será retornado para o acululador esse elemento 
//! ########################################################
//! ########################################################
//! ########################################################
//! ########################################################