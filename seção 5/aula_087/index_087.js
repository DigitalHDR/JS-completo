// Retorne a soma do dobro de todos os pares
// => Filtrar pares
// => Dobrar os valores
// => Reduzir (somar tudo somente os valores pares)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Filtrar pares |
//* forma reduzida com arrow
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosPares = numeros.filter(valor => valor % 2 === 0)
// console.log(numerosPares)
//?         [ 50, 80, 2, 8, 22 ]
//! ########################################################
//! forma curta com arrow
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosPares = numeros.filter(function(valor) {
//     return valor % 2 === 0
// })
// console.log(numerosPares)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*       | Dobrar os valores |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const valorEmDobro = numeros.filter(function (valor) {
//     return valor % 2 === 0
// }).map(function (valor) {
//     return valor * 2
// })
// console.log(valorEmDobro)
//?         [ 100, 160, 4, 16, 44 ]
//! ########################################################
//! forma curta com arrow
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const valorEmDobro = numeros
//     .filter(valor => valor % 2 === 0)
//     .map(valor => valor * 2)
// console.log(valorEmDobro)
//?         [ 100, 160, 4, 16, 44 ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | Reduzir (somar tudo somente dos valores pares) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const valorEmDobro = numeros.filter(function (valor) {
//     return valor % 2 === 0
// }).map(function (valor) {
//     return valor * 2
// }).reduce(function (acumulador, valor) {
//     return acumulador + valor
// })
// console.log(valorEmDobro)
//?         324
//! ########################################################
//! forma curta com arrow
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const valorEmDobro = numeros
//     .filter(valor => valor % 2 === 0)
//     .map(valor => valor * 2)
//     .reduce((acumulador, valor) => acumulador + valor)
// console.log(valorEmDobro)
//?         324