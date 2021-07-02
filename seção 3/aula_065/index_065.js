// function mostraHora() {
//     let data = new Date()

//     return data.toLocaleDateString('pt-BR', {
//         hour12: false
//     })
// }

// console.log(mostraHora())
//?         01/07/2021
//todo =====================================================
// function mostraHora() {
//     let data = new Date()

//     return data.toLocaleDateString('pt-BR', {
//         hour12: false
//     })
// }

// function funcaoDoInterval() {
//     console.log(mostraHora())
// }

// setInterval(funcaoDoInterval, 1000)
//?         a função vai ser executada a cada 1 segundo
//?         01/07/2021
//?         01/07/2021
//?         01/07/2021
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | Mesmo código com array function |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function mostraHora() {
//     let data = new Date()

//     return data.toLocaleDateString('pt-BR', {
//         hour12: false
//     })
// }

// setInterval(e => {   //?         mudou aqui
//     console.log(mostraHora())
// }, 1000)
//?         a função vai ser executada a cada 1 segundo
//?         01/07/2021
//?         01/07/2021
//?         01/07/2021
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*             | dentro de uma variavel |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function mostraHora() {
//     let data = new Date()

//     return data.toLocaleDateString('pt-BR', {
//         hour12: false
//     })
// }

// const timer = setInterval(e => {  //?         mudou aqui
//     console.log(mostraHora())
// }, 1000)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | setTimeout e clearInterval |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function mostraHora() {
//     let data = new Date()

//     return data.toLocaleDateString('pt-BR', {
//         hour12: false
//     })
// }

// const timer = setInterval(e => {
//     console.log(mostraHora())
// }, 1000)

// setTimeout(e => {  //?         mudou aqui
//     clearInterval(timer)
// }, 5000)
//?         01/07/2021
//?         01/07/2021
//?         01/07/2021
//?         01/07/2021
//?         
//?         O setTimeout()método do mixin define um cronômetro que
//?         executa uma função ou parte do código especificado
//?         quando o cronômetro expira
//?         
//?         O clearInterval()método do WindowOrWorkerGlobalScopemixin
//?         cancela uma ação
//todo =====================================================
// function mostraHora() {
//     let data = new Date()

//     return data.toLocaleDateString('pt-BR', {
//         hour12: false
//     })
// }

// const timer = setInterval(function() {
//     console.log(mostraHora())
// }, 1000)

// setTimeout(function() {
//     clearInterval(timer)
// }, 3000)

// setTimeout(function() {
//     console.log('Ok parou tudo!')
// }, 5000)
//?         01/07/2021
//?         01/07/2021
//?         Ok parou tudo!
//todo =====================================================