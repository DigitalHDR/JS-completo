// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     console.log(numero)
// }
//?         1
//?         2
//?         3
//?         4
//?         5
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*       | continue | (pula para próxima interação)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     if (numero === 2) {
//         continue
//     }

//     console.log(numero)
// }
//?         1
//?         3
//?         4
//?         5
//todo =====================================================
// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     if (numero === 2 || numero === 5) {
//         continue
//     }

//     console.log(numero)
// }
//?         1
//?         3
//?         4
//?         com o continue ele encontra, pula esse valor e continua
//todo =====================================================
// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     if (numero === 2) {
//         continue
//     }

//     if (numero === 5) {
//         continue
//     }

//     console.log(numero)
// }
//?         1
//?         3
//?         4
//?         com o continue ele encontra, pula esse valor e continua
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | for, if com break |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     if (numero === 2) {
//         console.log(`Pulei o ${numero}`)
//         continue
//     }

//     if (numero === 4) {
//         break
//     }

//     console.log(numero)
// }
//?         1
//?         Pulei o 2
//?         3
//?         Perceba que após encontrar o break ele para e sai,
//?         e não executa mais nada dentro desse laço
//todo =====================================================
// const numeros = [1, 2, 3, 4, 5]

// for (const numero of numeros) {
//     if (numero === 2) {
//         console.log(`Pulei o ${numero}`)
//         continue
//     }

//     if (numero === 4) {
//         console.log(`${numero} encontrado, saindo...`)
//         break
//     }

//     console.log(numero)
// }
//?         1
//?         Pulei o 2
//?         3
//?         4 encontrado, saindo...
//?         Perceba que após encontrar o break ele para e sai,
//?         e não executa mais nada dentro desse laço
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*    usando o while para fazer a mesma coisa | ATENÇÃO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [1, 2, 3, 4, 5]

// let i = 0
// while (i < numeros.length) {
//     let numero = numeros[i]

//     if (numero === 2) {
//         console.log(`Pulei o ${numero}`)
//         i++
//         continue
//     }

//     console.log(numero)

//     if (numero === 4) {
//         console.log(`${numero} encontrado, saindo...`)
//         i++
//         break
//     }

//     i++
// }
//?         1
//?         Pulei o 2
//?         3
//?         4 encontrado, saindo...
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Com do while |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [1, 2, 3, 4, 5]

// let i = 0
// do {
//     let numero = numeros[i]

//     if (numero === 2) {
//         console.log(`Pulei o ${numero}`)
//         i++
//         continue
//     }

//     console.log(numero)

//     if (numero === 4) {
//         console.log(`${numero} encontrado, saindo...`)
//         i++
//         break
//     }

//     i++
// }   while (i < numeros.length)
//?         1
//?         Pulei o 2
//?         3
//?         4 encontrado, saindo...
//todo =====================================================