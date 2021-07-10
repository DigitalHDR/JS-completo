// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, sobrenome
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1)
//?         { nome: 'Lucas', sobrenome: 'Fernando' }
//todo =====================================================
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala: function (assunto) {
//             return `${nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala())
//?         Lucas está undefined.
//?         undefined por que ainda não tem nunhum argumento
//todo =====================================================
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala: function (assunto) {
//             return `${nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala('falando sobre JS'))
//?         Lucas está falando sobre JS.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | this |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala('falando sobre JS'))
//?         Lucas está falando sobre JS.
//todo =====================================================
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala('falando sobre JS'))
// console.log(p1.nome)
//?         Lucas está falando sobre JS.
//?         Lucas
//todo =====================================================
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`
        }
    }
}

const p1 = criaPessoa('Lucas', 'Fernando')
console.log(p1.fala('falando sobre JS'))
console.log(p1.nome)