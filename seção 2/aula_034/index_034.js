// Primitivos(imutáveis) - string, number, boolean, undefined, null(bigint, symbol)
// let nome = 'lucas'
// nome[0] = 'r'
// console.log(nome[0], nome)
// l lucas
// ===============================================
// let a = 'A'
// let b = a
// console.log(a, b)
// A A
// ===============================================
// let a = 'A'
// let b = a
// console.log(a, b)

// a = 'Outra coisa'
// console.log(a, b)
// A A
// Outra coisa A
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Referência (mutável) - Array, objecto, function - passado por referência
// let a = [1,2,3]
// let b = a
// console.log(a, b)
// [ 1, 2, 3 ] [ 1, 2, 3 ]
// ===============================================
// let a = [1,2,3]
// let b = a
// console.log(a, b)

// a.push(4)
// console.log(a, b)
// [ 1, 2, 3 ] [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
// ===============================================
// let a = [1,2,3]
// let b = a
// console.log(a, b)

// a.push(4)
// console.log(a, b)

// b.pop()
// console.log(a, b)
// [ 1, 2, 3 ] [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
// [ 1, 2, 3 ] [ 1, 2, 3 ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  operador spreed
// let a = [1,2,3]
// let b = [...a]
// let c = b

// console.log(a, b)

// a.push(4)
// console.log(a, b)

// b.pop()
// console.log(a, b)
// [ 1, 2, 3 ] [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ] [ 1, 2, 3 ]
// [ 1, 2, 3, 4 ] [ 1, 2 ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const a = {
//     nome: 'lucas',
//     sobrenome: 'fernando'
// }
// const b = a
// console.log(b)
// { nome: 'lucas', sobrenome: 'fernando' }
// ===============================================
// const a = {
//     nome: 'lucas',
//     sobrenome: 'fernando'
// }
// const b = a
// a.nome = 'pabline'
// console.log(b)
// { nome: 'pabline', sobrenome: 'fernando' }
// ===============================================
// const a = {
//     nome: 'lucas',
//     sobrenome: 'fernando'
// }
// const b = a
// a.nome = 'pabline'
// console.log(a)
// console.log(b)
// { nome: 'pabline', sobrenome: 'fernando' }
// { nome: 'pabline', sobrenome: 'fernando' }
// ===============================================