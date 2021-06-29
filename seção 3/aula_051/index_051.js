//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Atribuição via desestruturação (Objetos) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//todo =====================================================
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 30,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
// }

// console.log(pessoa)
//?          {
//?              nome: 'lucas',
//?              sobrenome: 'fernando',
//?              idade: 30,
//?              endereco: { rua: 'Av Brasil', numero: 320 }
//?            }
//todo =====================================================
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 30,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
// }

// console.log(pessoa.nome)
//?         lucas
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*             | objeto dentro de variavel |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 30,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
// }

// const nome = pessoa.nome
// console.log(nome)
//?         lucas
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*             | objeto dentro de variavel,
//*             via (atribuição desestruturação) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
// nome: 'lucas',
// sobrenome: 'fernando',
// idade: 30,
// endereco: {
//     rua: 'Av Brasil',
//     numero: 320
// }
// }

// const { nome } = pessoa
// console.log(nome)
//?         lucas
//?         
//todo =====================================================
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
//     }
    
// const { nome, sobrenome, idade } = pessoa
// console.log(nome, sobrenome, idade)
//?         lucas fernando 32
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | modificando o objeto dentro do atribuição desestruturação  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
//     }
    
// const { nome = 'outro nome', sobrenome } = pessoa
// console.log(nome, sobrenome)
//?         outro nome fernando
//?         dentro do objeto pessoa, não pode ter o objeto nome
//todo =====================================================
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
//     }
    
// const { nome, sobrenome, nascido = 'Birigui' } = pessoa
// console.log(nome, sobrenome, nascido )
//?         lucas fernando Birigui
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | (objeto) atribuição desestruturação vazia  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
//     }
    
// const { nome = '', sobrenome } = pessoa
// console.log(nome, sobrenome )
//?         assim retorna vazio, pois não tem nada detro de nome
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | modificando nome de objeto dentro da atribuição desestruturação|
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
//     }
    
// const { nome: teste = 'lucas', sobrenome } = pessoa
// console.log(teste, sobrenome )
//?         lucas fernando
//?         perceba que o objeto (nome) que foi criado dentro da desestruturação
//?         foi alterado para (teste) com valor (lucas)
//todo =====================================================
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
// }

// const { endereco: { rua, numero} } = pessoa
// console.log(rua, numero)
//?          Av Brasil 320
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*             | junto com o obejeto |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
// }

// const { endereco: { rua, numero}, endereco } = pessoa
// console.log(rua, numero, endereco)
//?         Av Brasil 320 { rua: 'Av Brasil', numero: 320 }
//todo =====================================================
// const pessoa = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 32,
//     endereco: {
//         rua: 'Av Brasil',
//         numero: 320
//     }
// }

// const { nome, ...resto } = pessoa
// console.log(nome, resto)
//?         lucas {
//?           sobrenome: 'fernando',
//?           idade: 32,
//?           endereco: { rua: 'Av Brasil', numero: 320 }
//?          }
//todo =====================================================
