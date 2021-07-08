//?         retorn, retorna um valor, termina a função
//todo =====================================================
// function soma(a, b) {
//     return a + b
// }
// console.log(soma(2, 3))
//todo =====================================================
// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red' 
// })
//?         faz o background ficar red
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | usando a propria função para cria o objeto |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }
// console.log(criaPessoa('lucas', 'fernando'))
//?         { nome: 'lucas', sobrenome: 'fernando' }
//! ########################################################
//! OS DOIS SÃO IGUAIS POREM CADA FOI FEITO DE UM JEITO
// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome}
// }
// const p1 = criaPessoa('lucas', 'fernando')
// const p2 = {
//     nome: 'lucas',
//     sobrenome: 'fernando'
// }

// console.log(p1)
// console.log(p2)
//?         { nome: 'lucas', sobrenome: 'fernando' }
//?         { nome: 'lucas', sobrenome: 'fernando' }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function duplica(n) {
//     return n * 2
// }

// function triplicas(n) {
//     return n * 3
// }

// function quadriplica(n) {
//     return n * 4
// }

// console.log(duplica(2))
// console.log(triplicas(2))
// console.log(quadriplica(2))
//?         4
//?         6
//?         8
//! ########################################################
//! IGUAL O DE CIMA POREM MELHOR 
// function criaMultiplicador(multiplicador) {
//     return function (n) {
//         return n * multiplicador
//     }
// }

// const duplica = criaMultiplicador(2)
// const triplica = criaMultiplicador(3)
// const quadriplica = criaMultiplicador(4)

// console.log(duplica(2))
// console.log(triplica(3))
// console.log(quadriplica(4))
//?         4
//?         9
//?         16
//todo =====================================================