// O método forEach() itera sobre os elementos de um array,
// e executa uma função predefinida uma ver por elemento.

// O método forEach() executa uma dada função,
// em cada elemento de um array.
//todo =====================================================
//todo =====================================================

// const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// for(let valor of a1) {
//     console.log(valor)
// }
//?         10
//?         20
//?         30
//?         40
//?         50
//?         60
//?         70
//?         80
//?         90
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | forEach |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const a1 = [10, 20, 30, 40, 50]
// a1.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array)
// })
//?         10 0 [ 10, 20, 30, 40, 50 ]
//?         20 1 [ 10, 20, 30, 40, 50 ]
//?         30 2 [ 10, 20, 30, 40, 50 ]
//?         40 3 [ 10, 20, 30, 40, 50 ]
//?         50 4 [ 10, 20, 30, 40, 50 ]
//todo =====================================================
// const a1 = [10, 20, 30]
// let total = 0

// a1.forEach(function(valor) {
//     total += valor
// })
// console.log(total)
//?         60