//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | map |
//*         é pareceido com o metodo filter()
//* porem map cria uma nova array com o que vc modificou
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Dobre os números

//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     return `Lucas ${valor}`
// })

// console.log(numerosEmDobro)
//?         [
//?             'Lucas 5',  'Lucas 50',
//?             'Lucas 80', 'Lucas 1',
//?             'Lucas 2',  'Lucas 3',
//?             'Lucas 5',  'Lucas 8',
//?             'Lucas 7',  'Lucas 11',
//?             'Lucas 22', 'Lucas 27'
//?           ]
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     return `Lucas ${valor} ${indice}`
// })

// console.log(numerosEmDobro)
//?         [
//?           'Lucas 5 0',   'Lucas 50 1',
//?           'Lucas 80 2',  'Lucas 1 3',
//?           'Lucas 2 4',   'Lucas 3 5',
//?           'Lucas 5 6',   'Lucas 8 7',
//?           'Lucas 7 8',   'Lucas 11 9',
//?           'Lucas 22 10', 'Lucas 27 11'
//?         ]
//todo =====================================================
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosEmDobro = numeros.map((valor, indice, array) => {
//     return valor * 2
// })

// console.log(numerosEmDobro)
//?         [
//?           10, 100, 160,  2,  4,
//?           6,  10,  16, 14, 22,
//?          44,  54
//?         ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | forma mais curta com arrow function |
//*  como so tem um parametro não precisa de ( ), como sé tem uma linha
//*  não precisa de return
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 22, 27]
// const numerosEmDobro = numeros.map(valor => valor * 2)

// console.log(numerosEmDobro)
//?         [
//?           10, 100, 160,  2,  4,
//?           6,  10,  16, 14, 22,
//?          44,  54
//?         ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | exercícios |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apanas a chave 'nome' do objeto
// Adicione uma chave id em cada objeto
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Retorne apenas uma string com o nome da pessoa |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const retornaNome = pessoa.map(nomeString => nomeString.nome)
// console.log(retornaNome)
//?         [ 'Lucas', 'Pabline', 'Ana', 'Júlia', 'Carol', 'Becky' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Remova apanas a chave 'nome' do objeto |
//* 1° maneira
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const removeNome = pessoa.map((soIdade) => {
//     delete soIdade.nome
//     return soIdade
// })

// console.log(removeNome)
//?         [
//?             { idade: 32 },
//?             { idade: 19 },
//?             { idade: 25 },
//?             { idade: 29 },
//?             { idade: 20 },
//?             { idade: 14 }
//?           ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Remova apanas a chave 'nome' do objeto |
//* 2° maneira
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const removeNome = pessoa.map((soIdade) => {
//     return { idade: soIdade.idade }
// })

// console.log(removeNome)
//?         [
//?             { idade: 32 },
//?             { idade: 19 },
//?             { idade: 25 },
//?             { idade: 29 },
//?             { idade: 20 },
//?             { idade: 14 }
//?           ]
//! ########################################################
//! COM ARROW FUNCTION USANDO A CHAVES DO OBJETO E NÃO DA FUNÇÃO
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const removeNome = pessoa.map(soIdade => ({ idade: soIdade.idade }))
// console.log(removeNome)
//?         [
//?             { idade: 32 },
//?             { idade: 19 },
//?             { idade: 25 },
//?             { idade: 29 },
//?             { idade: 20 },
//?             { idade: 14 }
//?           ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | Adicione uma chave id em cada objeto |
//* 1° melhor forma
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const addId = pessoa.map((obj, indice) => {
//     const newObj = { ...obj }
//     newObj.id = indice
//     return newObj
// })

// console.log(addId)
//?         [
//?             { nome: 'Lucas', idade: 32, id: 0 },
//?             { nome: 'Pabline', idade: 19, id: 1 },
//?             { nome: 'Ana', idade: 25, id: 2 },
//?             { nome: 'Júlia', idade: 29, id: 3 },
//?             { nome: 'Carol', idade: 20, id: 4 },
//?             { nome: 'Becky', idade: 14, id: 5 }
//?           ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | Adicione uma chave id em cada objeto |
//* 2° esse não muda o original
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const addId = pessoa.map((pessoaId, pessoaNome) => {
//     return `Id:${pessoaNome} ${pessoaId.nome}.`
// })

// console.log(addId)
//?         [
//?             'Id:0 Lucas.',
//?             'Id:1 Pabline.',
//?             'Id:2 Ana.',
//?             'Id:3 Júlia.',
//?             'Id:4 Carol.',
//?             'Id:5 Becky.'
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | Adicione uma chave id em cada objeto |
//* 3° isso faz mecher no objeto original
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = [
//     { nome: 'Lucas', idade: 32 },
//     { nome: 'Pabline', idade: 19 },
//     { nome: 'Ana', idade: 25 },
//     { nome: 'Júlia', idade: 29 },
//     { nome: 'Carol', idade: 20 },
//     { nome: 'Becky', idade: 14 }
// ]

// const addId = pessoa.map((pessoaId, pessoaIndice) => {
//     pessoaId.id = pessoaIndice
//     return pessoaId
// })

// console.log(addId)
//?             [
//?                 { nome: 'Lucas', idade: 32, id: 0 },
//?                 { nome: 'Pabline', idade: 19, id: 1 },
//?                 { nome: 'Ana', idade: 25, id: 2 },
//?                 { nome: 'Júlia', idade: 29, id: 3 },
//?                 { nome: 'Carol', idade: 20, id: 4 },
//?                 { nome: 'Becky', idade: 14, id: 5 }
//?               ]
//todo =====================================================