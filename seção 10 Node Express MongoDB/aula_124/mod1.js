// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// module.exports.nome = nome;

// console.log(module.exports)
//?         { nome: 'Lucas' }
//todo =====================================================
// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome

// console.log(module.exports)
//?         { nome: 'Lucas', sobrenome: 'Fernando' }
//todo =====================================================
// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// console.log(module.exports)
// //?{
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     falaNome: [Function: falaNome]
// //?}
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | forma reduzida | sem module
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// exports.nome = nome;
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome

// console.log(exports)
// //?{
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     falaNome: [Function: falaNome]
// //?}
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | this |  
//* é pouco usado, mas funciona igual exports e module
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// exports.nome = nome;
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// this.qualquerCoisa = 'O que eu quiser exportar'

// console.log(exports)
// //?{
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     falaNome: [Function: falaNome],
//     qualquerCoisa: 'O que eu quiser exportar'
// //?  }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | expotando com qualquer nome |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => {
//     console.log(nome, sobrenome)
// }

// exports.Nome123 = nome;
// exports.sobreTASnome = sobrenome
// exports.falaNSDFome = falaNome
// this.qualquerCoisa = 'O que eu quiser exportar'

// console.log(exports)
// //?{
//   Nome123: 'Lucas',
//   sobreTASnome: 'Fernando',
//   falaNSDFome: [Function: falaNome],
//   qualquerCoisa: 'O que eu quiser exportar'
// //?}
//todo =====================================================
// const nome = 'Lucas'
// const sobrenome = 'Fernando'

// const falaNome = () => nome + ' ' + sobrenome

// exports.nome = nome;
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// this.qualquerCoisa = 'O que eu quiser exportar'

// console.log(exports)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }
// }

// module.exports.nome = 'Lucas'
// exports.Pessoa = Pessoa
// this.sobrenome = 'Qualquer coisa que eu quiser'
//todo =====================================================
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

const nome = 'Lucas'
const sobrenome = 'Fernando'

module.exports = {
    nome, sobrenome, Pessoa
}