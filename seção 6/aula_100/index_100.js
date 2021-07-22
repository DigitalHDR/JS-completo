// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1)
//?         { nome: 'Lucas', sobrenome: 'Fernando' }
//?         também tem __proto__
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* - DESEMPENHO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,

//         falar() {
//             console.log(`${this.nome} está falando.`)
//         },

//         comer() {
//             console.log(`${this.nome} está comer.`)
//         },

//         beber() {
//             console.log(`${this.nome} está bebendo.`)
//         }

//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1)
//?         não recomentado
//?         isso funciona mais o desempenho vai lá em baixo 
//?         No google chrome

//?         {nome: "Lucas", sobrenome: "Fernando", falar: ƒ, comer: ƒ, beber: ƒ}
//?         beber: ƒ beber()
//?         comer: ƒ comer()
//?         falar: ƒ falar()
//?         nome: "Lucas"
//?         sobrenome: "Fernando"
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | add o prototype dentro da função construtora |
//* + DESEMPENHO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     const pessoaPrototype = {
//         falar() {
//             console.log(`${this.nome} está falando.`)
//         },

//         comer() {
//             console.log(`${this.nome} está comer.`)
//         },

//         beber() {
//             console.log(`${this.nome} está bebendo.`)
//         }
//     }

//     return Object.create(pessoaPrototype, {
//         nome: { value: nome },
//         sobrenome: { value: sobrenome }
//     })
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
//?         No google chrome

//?         p1.falar()
//?         Lucas está falando.
//?         p1.comer()
//?         Lucas está comer.
//?         p1.beber()
//?         Lucas está bebendo.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*    | com outra pessoa usando o mesmo prototype |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     const pessoaPrototype = {
//         falar() {
//             console.log(`${this.nome} está falando.`)
//         },

//         comer() {
//             console.log(`${this.nome} está comer.`)
//         },

//         beber() {
//             console.log(`${this.nome} está bebendo.`)
//         }
//     }

//     return Object.create(pessoaPrototype, {
//         nome: { value: nome },
//         sobrenome: { value: sobrenome }
//     })
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// const p2 = criaPessoa('Pabline', 'Bressan')
//?         No google chrome

//?         p1.falar()
//?         Pabline está falando.
//?         p1.comer()
//?         Pabline está comer.
//?         p1.beber()
//?         Pabline está bebendo.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | outra maneira de usar o prototype, por fora da 
//*       da função construtora|
//*       e usando o operador spread
//!         o nome da forma de uso é chamado de: mexin
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const falar = {
//     falar() {
//         console.log(`${this.nome} está falando.`)
//     }
// }

// const comer = {
//     comer() {
//         console.log(`${this.nome} está comer.`)
//     }
// }

// const beber = {
//     beber() {
//         console.log(`${this.nome} está bebendo.`)
//     }
// }

// const pessoaPrototype = { ...falar, ...comer, ...beber }


// function criaPessoa(nome, sobrenome) {
//     return Object.create(pessoaPrototype, {
//         nome: { value: nome },
//         sobrenome: { value: sobrenome }
//     })
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// const p2 = criaPessoa('Pabline', 'Bressan')
// console.log(p2.falar(), p2.comer(), p2.beber())
//?          Pabline está falando.
//?          Pabline está comer.
//?          Pabline está bebendo.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                | ou com o Object.assign |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const falar = {
//     falar() {
//         console.log(`${this.nome} está falando.`)
//     }
// }

// const comer = {
//     comer() {
//         console.log(`${this.nome} está comer.`)
//     }
// }

// const beber = {
//     beber() {
//         console.log(`${this.nome} está bebendo.`)
//     }
// }

// const pessoaPrototype = Object.assign({}, falar, comer, beber)


// function criaPessoa(nome, sobrenome) {
//     return Object.create(pessoaPrototype, {
//         nome: { value: nome },
//         sobrenome: { value: sobrenome }
//     })
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// const p2 = criaPessoa('Pabline', 'Bressan')
// console.log(p1.falar(), p1.comer(), p1.beber())
//?          Lucas está falando.
//?          Lucas está comer.
//?          Lucas está bebendo.
//todo =====================================================