//?         For clássico - Geralmente com iteráveis (arrays ou strings)
//?         For in - Retorna o indice ou chave (string, array, ou objetos)
//?         For of -Retorna o valor em si (iteráveis, arrays ou strings)
//todo =====================================================
// const nome = 'Lucas'

// for (let i of nome) {
//     console.log(i)
// }
//?         L
//?         u
//?         c
//?         a
//?         s
//todo ===================================================== 
// const nome = [10, 20, 30]

// for (let i of nome) {
//     console.log(i)
// }
//?         10
//?         20
//?         30
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | For in Com objeto |  (pega a chave do objeto)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando'
// }

// for (let chave in pessoa) {
//     console.log(chave , pessoa[chave])
// }
//?         nome Lucas
//?         sobrenome Fernando
//todo =====================================================
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando'
// }

// for (let chave in pessoa) {
//     console.log(pessoa[chave])
// }
//?         Lucas
//?         Fernando
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | For of Com objeto |                NÃO FUNCIONA
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'Lucas',
//     sobrenome: 'Fernando',
// }

// for (let chave of pessoa) {
//     console.log(pessoa[chave])
// }
//?         TypeError: pessoa is not iterable