// const pessoal = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 32
// }

// console.log(pessoal.nome)
// console.log(pessoal.sobrenome)
// console.log(pessoal.idade)
// lucas
// fernando
// 32
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  CRIANDO UMA FUNCTION
//  QUE FAZ UM OBJETO AUTOMATICAMENTE
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoal = criaPessoa('Lucas', 'fernando', 32)
// console.log(pessoal.nome)
// Lucas
// ==============================================================
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

// const pessoa1 = criaPessoa('Lucas', 'fernando', 32)
// const pessoa2 = criaPessoa('pabline', 'bressan', 19)

// console.log(pessoa1.nome, pessoa2.nome)
// Lucas pabline
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  abreviando o codigo
// para isso, o parametro e o objeto tem que ter o mesmo nome
// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome,
//         sobrenome,
//         idade
//     }
// }

// const pessoa1 = criaPessoa('Lucas', 'fernando', 32)
// const pessoa2 = criaPessoa('pabline', 'bressan', 19)

// console.log(pessoa1.nome, pessoa2.nome)
// Lucas pabline
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  função dentro de um objeto vira metodo
// const pessoa1 = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 25,

//     fala() {
//         console.log('Olá mundo!')
//     }
// }

// pessoa1.fala()
// Olá mundo!
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  usando o this
//                  função dentro de um objeto vira metodo
// const pessoa1 = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 25,

//     fala() {
//         console.log(`${this.nome} ${this.sobrenome} está falando oi`)
//     }
// }

// pessoa1.fala()
// lucas fernando está falando oi
// ==============================================================
// const pessoa1 = {
//     nome: 'lucas',
//     sobrenome: 'fernando',
//     idade: 25,

//     fala() {
//         console.log(`A minha idade atual é ${this.idade}.`)
//     },

//     incrementaIdade() {
//         this.idade++
//     }
// }

// pessoa1.fala()
// pessoa1.incrementaIdade()
// pessoa1.fala()
// A minha idade atual é 25.
// A minha idade atual é 26.
// perceba que aqui
// 1° fala a idade
// 2° incrementa a idade mais ainda não fala
// 3° fala a idade ja incrementada