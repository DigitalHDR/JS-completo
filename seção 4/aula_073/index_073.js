//!            (nesses exercicios) o setTimeout()
//! é apenas para simular algo que esteja acontecendo no navegador
//! ########################################################
// function f1() {
//     setTimeout(() => {
//         console.log('f1')
//     }, 500)
// }

// function f2() {
//     setTimeout(() => {
//         console.log('f2')
//     }, 1000)
// }

// function f3() {
//     setTimeout(() => {
//         console.log('f3')
//     }, 800)
// }
// f1()
// f2()
// f3()
// console.log('Olá Mundo!')
//?         Olá Mundo!
//?         f1
//?         f3
//?         f2
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | com random() |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min
//     return Math.floor(num)
// }
// console.log(rand())

// function f1() {
//     setTimeout(() => {
//         console.log('f1')
//     }, rand())
// }

// function f2() {
//     setTimeout(() => {
//         console.log('f2')
//     }, rand())
// }

// function f3() {
//     setTimeout(() => {
//         console.log('f3')
//     }, rand())
// }
// f1()
// f2()
// f3()
// console.log('Olá Mundo!')
//?         2978
//?         Olá Mundo!
//?         f2
//?         f1
//?         f3
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | funçao callback | MUITO IMPORTANTE
//*                         ATENÇÃO
//*        USANDO PROMISE É MELHOR AINDA AULAS FUTURAS
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min
//     return Math.floor(num)
// }
// console.log(rand())

// function f1(callback) {
//     setTimeout(() => {
//         console.log('f1')
//         if (callback) callback()
//     }, rand())
// }

// function f2(callback) {
//     setTimeout(() => {
//         console.log('f2')
//         if (callback) callback()
//     }, rand())
// }

// function f3(callback) {
//     setTimeout(() => {
//         console.log('f3')
//         if (callback) callback()
//     }, rand())
// }

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá Mundo!')
//         })
//     })
// })
//?         2697
//?         f1
//?         f2
//?         f3
//?         Olá Mundo!
//?         perceba que usando o callback como função mesmo que cada
//?         uma tenha um random, vai ser executada na ordem que vc colocar
//?         f1 tem um callback para executar f2
//?         f2 tem um callback para executar f3
//?         f3 tem um callback para executar o console.log
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*             | calback melhorando o codigo | 
//*           igual o de cima (POREM menos código)
//*                         ATENÇÃO
//*        USANDO PROMISE É MELHOR AINDA AULAS FUTURAS
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min = 1000, max = 3000) {
//     const num = Math.random() * (max - min) + min
//     return Math.floor(num)
// }
// console.log(rand())

// function f1(callback) {
//     setTimeout(() => {
//         console.log('f1')
//         if (callback) callback()
//     }, rand())
// }

// function f2(callback) {
//     setTimeout(() => {
//         console.log('f2')
//         if (callback) callback()
//     }, rand())
// }

// function f3(callback) {
//     setTimeout(() => {
//         console.log('f3')
//         if (callback) callback()
//     }, rand())
// }

// f1(f1callback)

// function f1callback() {
//     f2(f2callback)
// }

// function f2callback() {
//     f3(f3callback)
// }

// function f3callback() {
//     console.log('Olá mundo!')
// }
//?         1820
//?         f1
//?         f2
//?         f3
//?         Olá mundo!
//?         ASSIM O CÓDIGO FICA MELHOR POIS, SE TIVESSE VÁRIOS CALLBACK
//?         IRIA FICAR IGUAL UMA ARVORE DE NATAL
//todo =====================================================