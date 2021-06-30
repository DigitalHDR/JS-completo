// const frutas = ['Pera', 'Maçã', 'Uva']

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }
//?         Pera
//?         Maçã
//?         Uva
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | for(IN) | 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const frutas = ['Pera', 'Maçã', 'Uva']

// for (let i in frutas) {
//     console.log(frutas[i])
// }
//?         Pera
//?         Maçã
//?         Uva
//?         ele le os índices
//?         quando for objetos vai ler as chavess
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*               | for (IN) para objetos |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// for (let i in pessoa) {
//     console.log(i)
// }
//?         nome
//?         sobrenome
//?         idade
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// for (let i in pessoa) {
//     console.log(pessoa[i])
// }
//?         Lucas
//?         Fernando
//?         32
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// console.log(pessoa.nome)
//?         Lucas
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                   
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// const chave = 'nome'
// console.log(pessoa[chave])
//?         Lucas
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// console.log(pessoa.nome)
//?         Lucas
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | objeto  pessoa['nome'] |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// console.log(pessoa['nome'])
//?          Lucas
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// const chave = 'nome'
// console.log(pessoa[chave])
//?         Lucas
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// for (let chave in pessoa) {
//     console.log(chave)
// }
//?         nome
//?         sobrenome
//?         idade
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
//     idade: '32',
// }

// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave] )
// }
//?         nome Lucas
//?         sobrenome Fernando
//?         idade 32
//todo =====================================================