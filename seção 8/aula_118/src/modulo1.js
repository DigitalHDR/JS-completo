//?         1°
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export { nome }
//?         assim somente nome foi exportado
//todo =====================================================
// //?         2
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export { nome, sobrenome, idade, soma }
//todo =====================================================
// //?         3
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export { nome, sobrenome, idade, soma }
//todo =====================================================
// //?         4
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export { nome, sobrenome, idade, soma }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | exportando tudo na criação |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //?         5
// export const nome = 'Lucas'
// export const sobrenome = 'Fernando'
// export const idade = 30

// export function soma(x, y) {
//     return x + y
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }
// }
//todo =====================================================
// //?         6
// export const nome = 'Lucas'
// export const sobrenome = 'Fernando'
// export const idade = 30

// export function soma(x, y) {
//     return x + y
// }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | default |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //?         7
// export const nome = 'Lucas'
// export const sobrenome = 'Fernando'
// export const idade = 30

// export default function soma(x, y) {
//     return x + y
// }
//todo =====================================================
// //?         8
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export {nome as default, sobrenome, idade, soma}
//todo =====================================================
// //?         9
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export {nome , sobrenome, idade, soma as default}
//todo =====================================================
// //?         10
// const nome = 'Lucas'
// const sobrenome = 'Fernando'
// const idade = 30

// function soma(x, y) {
//     return x + y
// }

// export default (x, y) => x * y

// export { nome, sobrenome, idade, soma }
//todo =====================================================
//?         11
const nome = 'Lucas'
const sobrenome = 'Fernando'
const idade = 30

function soma(x, y) {
    return x + y
}

export default (x, y) => x * y

export { nome, sobrenome, idade, soma }