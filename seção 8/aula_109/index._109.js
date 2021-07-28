// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') reject(false)

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promise = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     'Outro valor'
// ]

// Promise.all(promise)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         [
//?           'Primeiro valor',
//?           'PROMISE 1 - Passei na promise',
//?           'PROMISE 2 - Passei na promise',
//?           'PROMISE 3 - Passei na promise',
//?           'Outro valor'
//?         ]
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') reject(false)

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000), //? Mudou aqui
//     'Outro valor'
// ]

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         false
//?         Error:
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') {
//             reject(false)
//             return //? Mudou aqui
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ]

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         false
//?         assim que foi encrontrado o erro, o programa para
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') {
//             reject('Cai no erro') //? Mudou aqui
//             return
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ]

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         Cai no erro
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') {
//             reject('Cai no erro') 
//             return
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(1000, 1000),
//     'Outro valor'
// ]

// Promise.race(promises) //? Mudou aqui
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         Primeiro valor
//?         sempre será entregue o primeiro valor
//?         perceba que não é uma promise, então sempre será executado primeiro
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') {
//             reject('Cai no erro') 
//             return
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi('Promise 1', 3000), //! FOI RETIRADA UMA DAS LINHAS
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     // esperaAi(1000, 1000),
//     'Outro valor'
// ]

// Promise.race(promises) //? Mudou aqui
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         Outro valor
//?         perceba que não é uma promise, então sempre será executado primeiro
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') {
//             reject('Cai no erro') 
//             return
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi('Promise 1', 3000), //! FOI RETIRADA UMA DAS LINHAS
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000), //! FOI RETIRADA UMA DAS LINHAS
// ]

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         PROMISE 2 - Passei na promise
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if (typeof msg !== 'string') {
//             reject('Cai no erro')
//             return
//         }

//         setTimeout(() => {
//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi('Promise 1', rand(1, 5)), //? Mudou aqui
//     esperaAi('Promise 2', rand(1, 5)), //? Mudou aqui
//     esperaAi('Promise 3', rand(1, 5)), //? Mudou aqui
// ]

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         PROMISE 3 - Passei na promise
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof msg !== 'string') {
//                 reject('Cai no erro')
//                 return
//             }

//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
// ]

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         PROMISE 2 - Passei na promise
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof msg !== 'string') {
//                 reject('Cai no erro')
//                 return
//             }

//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),

// ]

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })
//?         Cai no erro
//?         algum momento pode cair nesse erro está em random
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof msg !== 'string') {
//                 reject('Cai no erro')
//                 return
//             }

//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),

// ]

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })

// function baixaPagina() {
//     const emCache = true

//     if (emCache) {
//         return Promise.resolve('Página em cache')
//     } else {
//         return esperaAi('Baixei a pagina', 3000)
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina)
//     })
//     .catch(e => console.log(e))
//?         Página em cache
//?         PROMISE 1 - Passei na promise
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof msg !== 'string') {
//                 reject('Cai no erro')
//                 return
//             }

//             resolve(msg.toUpperCase() + ' - Passei na promise')
//         }, tempo)
//     })
// }

// //Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),

// ]

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (erro) {
//         console.log(erro)
//     })

// function baixaPagina() {
//     const emCache = true

//     if (emCache) {
//         return Promise.reject('Página em cache')
//     } else {
//         return esperaAi('Baixei a pagina', 3000)
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina)
//     })
//     .catch(e => console.log(e))
//?         Página em cache
//?        PROMISE 3 - Passei na promise
//todo =====================================================
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
        }, tempo)
    })
}

//Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    esperaAi(1000, rand(1, 5)),
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),

]

Promise.race(promises)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(function (erro) {
        console.log(erro)
    })

function baixaPagina() {
    const emCache = true

    if (emCache) {
        return Promise.reject('Página em cache')
    } else {
        return esperaAi('Baixei a pagina', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))