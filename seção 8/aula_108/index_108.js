// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     setTimeout(() => {
//         console.log(msg)
//     }, tempo)
// }

// esperaAi('Frase 1', rand(1, 3))
// esperaAi('Frase 1', 3000)
// esperaAi('Frase 1', 5000)
//?        Frase 1
//?        Frase 1
//?        Frase 1
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     setTimeout(() => {
//         console.log(msg)
//     }, tempo)
// }

// esperaAi('Frase 1', rand(1, 3))
// esperaAi('Frase 2', rand(1, 3))
// esperaAi('Frase 3', rand(1, 3))
//?         Frase 1
//?         Frase 3
//?         Frase 2
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Promise() | constructor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg)
//         }, tempo)
//     })
// }

// esperaAi('Frase 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 2', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .catch()
//?         Frase 1
//?         Frase 2
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg)
//         }, tempo)
//     })
// }

// esperaAi('Frase 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 2', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 3', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .catch()
//?         Frase 1
//?         Frase 2
//?         Frase 3
//?         as frases agora são exibinas na ordem, com o promise
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg)
//         }, tempo)
//     })
// }

// esperaAi('Frase 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 2', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 3', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .then(() => {
//         console.log('Eu serei o último a ser exibido.')
//     })
//     .catch()
//?         Frase 1
//?         Frase 2
//?         Frase 3
//?         Eu serei o último a ser exibido.
//todo =====================================================
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg)
//         }, tempo)
//     })
// }

// esperaAi('Conexão com o BD 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Buscando dados da BASE 2', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Tratando os dados da BASE 3', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .then(() => {
//         console.log('Exibe dados na tela.')
//     })
//     .catch()
//?         Conexão com o BD 1
//?         Buscando dados da BASE 2
//?         Tratando os dados da BASE 3
//?         Exibe dados na tela.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Promise() | reject
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function rand(min, max) {
//     min *= 1000
//     max *= 1000
//     return Math.floor(Math.random() * (max - min) + min)
// }

// function esperaAi(msg, tempo) {
//     return new Promise((resolve, reject) => {
//         if(typeof msg !== 'string') reject('BAD VALUE')
//         setTimeout(() => {
//             resolve(msg)
//         }, tempo)
//     })
// }

// esperaAi('Conexão com o BD 1', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi(2222, rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Tratando os dados da BASE 3', rand(1, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//     })
//     .then(() => {
//         console.log('Exibe dados na tela.')
//     })
//     .catch(e => {
//         console.log('ERRO:', e)
//     })
//?         Conexão com o BD 1
//?         ERRO: BAD VALUE
//todo =====================================================
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('BAD VALUE')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

esperaAi('Conexão com o BD 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(2222, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Tratando os dados da BASE 3', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() => {
        console.log('Exibe dados na tela.')
    })
    .catch(e => {
        console.log('ERRO:', e)
    })