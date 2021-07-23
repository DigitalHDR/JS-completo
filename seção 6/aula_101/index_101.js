// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = {}
// for (const { id, nome } of pessoas) {
//     console.log(id, nome)
// }
//?         3 Lucas
//?         2 Pabline
//?         1 Becky
//todo =====================================================
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = {}
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas[id] = {...pessoa}
// }

// console.log(novasPessoas)
//?         {
//?           '1': { id: 1, nome: 'Becky' },
//?           '2': { id: 2, nome: 'Pabline' },
//?           '3': { id: 3, nome: 'Lucas' }
//?         }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | map |
//* coloando na ordem numerica dos numeros originais
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, {...pessoa})
// }

// console.log(novasPessoas)
//?         Map(3) {
//?           3 => { id: 3, nome: 'Lucas' },
//?           2 => { id: 2, nome: 'Pabline' },
//?           1 => { id: 1, nome: 'Becky' }
//?         }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, {...pessoa})
// }

// console.log(novasPessoas.get(2))
//?         { id: 2, nome: 'Pabline' }
//?         o nome do id no caso deve ser igual pra funcionar em todos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | retornando dentro de array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, {...pessoa})
// }

// for(const pessoa of novasPessoas) {
//     console.log(pessoa)
// }
//?         [ 3, { id: 3, nome: 'Lucas' } ]
//?         [ 2, { id: 2, nome: 'Pabline' } ]
//?         [ 1, { id: 1, nome: 'Becky' } ]
//todo =====================================================
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, { ...pessoa })
// }

// for (const [identifier, { id, nome }] of novasPessoas) {
//     console.log(identifier)
// }
//?         3
//?         2
//?         1
//todo =====================================================
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, { ...pessoa })
// }

// for (const [identifier, { id, nome }] of novasPessoas) {
//     console.log(identifier, id)
// }
//?         3 3
//?         2 2
//?         1 1
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*       | retornado o objeto com todos os valores |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, { ...pessoa })
// }

// for (const pessoas of novasPessoas.values()) {
//     console.log(pessoas)
// }
//?         { id: 3, nome: 'Lucas' }
//?         { id: 2, nome: 'Pabline' }
//?         { id: 1, nome: 'Becky' }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | deletando uma das chaves(elemento) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoas = [
//     { id: 3, nome: 'Lucas' },
//     { id: 2, nome: 'Pabline' },
//     { id: 1, nome: 'Becky' },
// ]

// const novasPessoas = new Map()
// for (const pessoa of pessoas) {
//     const { id } = pessoa
//     novasPessoas.set(id, { ...pessoa })
// }

// novasPessoas.delete(2)
// console.log(novasPessoas)
//?         Map(2)
//?         { 3 => { id: 3, nome: 'Lucas' },
//?           1 => { id: 1, nome: 'Becky' } }
//todo =====================================================
const pessoas = [
    { id: 3, nome: 'Lucas' },
    { id: 2, nome: 'Pabline' },
    { id: 1, nome: 'Becky' },
]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const { id } = pessoa
    novasPessoas.set(id, { ...pessoa })
}

novasPessoas.delete(2)
console.log(novasPessoas)