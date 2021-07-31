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
//             return
//         }, tempo)
//     })
// }

// esperaAi('Fase 1', rand(0, 3))
//     .then(valor => console.log(valor))
//     .catch(e => console.log(e))
//?         FASE 1 - Passei na promise
//todo =====================================================
// function rand(min = 0, max = 3) { //? FOI POSTO VALORES PADRÃO
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
//             return
//         }, tempo)
//     })
// }

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return esperaAi('Fase 3', rand())
//     })
    // .then(fase => {
    //     console.log(fase)
    // })
    // .catch(e => console.log(e))

//?         FASE 1 - Passei na promise
//?         FASE 2 - Passei na promise
//?         FASE 3 - Passei na promise
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Async / Await |
//*                        MELHOR QUE
//*                       then e catch 
//* permite usar promise dentro da função como se fossem de 
//* forma sincrona, é como se fosse o then e catch, porem melhor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min = 0, max = 3) { //? FOI POSTO VALORES PADRÃO
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
//             return
//         }, tempo)
//     })
// }

// //! para comparação com o | Async / Await |
// //? esperaAi('Fase 1', rand())
// //?     .then(valor => {
// //?         console.log(valor)
// //?         return esperaAi('Fase 2', rand())
// //?     })
// //?     .then(fase => {
// //?         console.log(fase)
// //?         return esperaAi('Fase 3', rand())
// //?     })
// //?     .then(fase => {
// //?         console.log(fase)
// //?     })
// //?     .catch(e => console.log(e))
// //! ------------------------------------------

// async function executa() {
//     const fase1 = await esperaAi('Fase 1', rand())
//     console.log(fase1)
    
//     const fase2 = await esperaAi('Fase 2', rand())
//     console.log(fase2)

//     const fase3 = await esperaAi('Fase 3', rand())
//     console.log(fase3)

//     console.log('Terminamos na fase:', fase3)
// }

// executa()
//?         FASE 1 - Passei na promise
//?         FASE 2 - Passei na promise
//?         FASE 3 - Passei na promise
//?         Terminamos na fase: FASE 3 - Passei na promise
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Async / Await |
//* fazendo dar erro 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min = 0, max = 3) { //? FOI POSTO VALORES PADRÃO
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
//             return
//         }, tempo)
//     })
// }

// //! para comparação com o | Async / Await |
// //? esperaAi('Fase 1', rand())
// //?     .then(valor => {
// //?         console.log(valor)
// //?         return esperaAi('Fase 2', rand())
// //?     })
// //?     .then(fase => {
// //?         console.log(fase)
// //?         return esperaAi('Fase 3', rand())
// //?     })
// //?     .then(fase => {
// //?         console.log(fase)
// //?     })
// //?     .catch(e => console.log(e))
// //! ------------------------------------------

// async function executa() {
//     const fase1 = await esperaAi('Fase 1', rand())
//     console.log(fase1)
    
//     const fase2 = await esperaAi(22222222, rand()) //? Erro colocado aqui de proposito
//     console.log(fase2)

//     const fase3 = await esperaAi('Fase 3', rand())
//     console.log(fase3)

//     console.log('Terminamos na fase:', fase3)
// }

// executa()
//?         FASE 1 - Passei na promise
//?         Error: 
//?         (node:16300) UnhandledPromiseRejectionWarning: Cai no erro
//!         APARCE ESSE TIPO DE ERRO PORQUE NÃO TEM O TRY CATCH.
//!         PARA TRATAMENTO DE ERRO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Async / Await |
//* fazendo dar erro 
//* usando o TRY CATCH 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function rand(min = 0, max = 3) { //? FOI POSTO VALORES PADRÃO
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
            return
        }, tempo)
    })
}

//! para comparação com o | Async / Await |
//? esperaAi('Fase 1', rand())
//?     .then(valor => {
//?         console.log(valor)
//?         return esperaAi('Fase 2', rand())
//?     })
//?     .then(fase => {
//?         console.log(fase)
//?         return esperaAi('Fase 3', rand())
//?     })
//?     .then(fase => {
//?         console.log(fase)
//?     })
//?     .catch(e => console.log(e))
//! ------------------------------------------

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand())
        console.log(fase1)
        
        const fase2 = await esperaAi(22222222, rand())
        console.log(fase2)
    
        const fase3 = await esperaAi('Fase 3', rand())
        console.log(fase3)
    
        console.log('Terminamos na fase:', fase3)
    } catch (e) {
        console.log(e)
    }
}

executa()
//?         FASE 1 - Passei na promise
//?         Cai no erro

//?         explicação
//?         o await é como se fosse o then()
//?         o catch() é o proprio catch() mesmo
//todo =====================================================