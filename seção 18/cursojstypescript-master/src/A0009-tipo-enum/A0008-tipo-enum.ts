//?enum, é uma estrutra de dados não ordenados
//todo==========================================================
// enum Cores {
//   VERMELHO = 10, // 10
//   AZUL = 100, // 100
//   AMARELO = 200, // 200
// }

// enum Cores {
//   ROXO = 'ROXO',
//   VERDE = 201,
//   ROSA,
// }

// export function escolhaACor(cor: Cores): void {
//   console.log(Cores[cor])
// }

// escolhaACor(123456)
//todo==========================================================
// enum Cores {
//   vermelhos,
//   azul,
//   amarelo,
// }

// console.log(Cores)
//? {
//   '0': 'vermelhos',
//   '1': 'azul',
//   '2': 'amarelo',
//   vermelhos: 0,
//   azul: 1,
//   amarelo: 2
//? }
//todo==========================================================
// enum Cores {
//   vermelhos,
//   azul,
//   amarelo,
// }

// console.log(Cores.vermelhos)
//?0
//todo==========================================================
// enum Cores {
//   vermelhos,
//   azul,
//   amarelo,
// }

// console.log(Cores[0])
//?vermelhos
//todo =====================================================
// enum Cores {
//   vermelhos = 10,
//   azul = 20,
//   amarelo = 50,
// }

// console.log(Cores.vermelhos)
// console.log(Cores[20])
//?     10
//?     azul
//?     percebaque Cores[20], pegou o seu elemento que tem esse valor
//todo =====================================================
// enum Cores {
//   vermelhos = 10,
//   azul = 20,
//   amarelo = 50,
// }

// enum Cores {
//   roxo = 'roxo',
//   marron = 20,
//   pink = 50,
// }

// console.log(Cores)
//? {
//   '10': 'vermelhos',
//   '20': 'marron',
//   '50': 'pink',
//   vermelhos: 10,
//   azul: 20,
//   amarelo: 50,
//   roxo: 'roxo',
//   marron: 20,
//   pink: 50
//? }
//todo =====================================================
// enum Cores {
//   vermelhos = 10,
//   azul = 20,
//   amarelo = 50,
// }

// enum Cores {
//   roxo = 'roxo',
//   marron = 20,
//   pink = 50,
// }

// function escolhaCor(cor: Cores): void {
//   console.log(Cores[cor])
// }

// escolhaCor(Cores.roxo)
//?     roxo
//todo =====================================================
enum Cores {
  vermelhos = 10,
  AZUL = 20,
  amarelo = 50,
}

enum Cores {
  roxo = 'roxo',
  LILAS = 'LILAS',
  pink = 50,
}

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor])
}

escolhaCor(Cores.AZUL)
