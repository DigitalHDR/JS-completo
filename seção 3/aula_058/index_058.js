// let i = 0
// while (i <= 5) {
//     console.log(i)
//     i++
// }
//?         0
//?         1
//?         2
//?         3
//?         4
//?         5
//todo =====================================================
// const nome = 'lucas'
// let i = 0
// while (i < nome.length) {
//     console.log(nome[i])
//     i++
// }
//?         l
//?         u
//?         c
//?         a
//?         s
//todo =====================================================
// function random(min, max) {
//     const r = Math.random() * (max - min) + min
//     return r
// }

// let rand = random(1, 50)
// console.log(rand)
//?         20.54480131295619
//todo =====================================================
// function random(min, max) {
//     const r = Math.random() * (max - min) + min
    return Math.floor(r)
// }

// let rand = random(1, 50)
// console.log(rand)
20
//todo =====================================================
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 20
let rand = random(min, max)

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}
//?         2
//?         3
//?         11
//?         7
//?         5
//?         9
//?         10
//?         isso faz com que o java fique executando o while até chegar no 10
//?         enquanto não chegar ele não para