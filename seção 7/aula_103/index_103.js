// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this.velocidade = 0
//     }

//     acelerar() {
//         if (this.velocidade >= 100) return
//         this.velocidade++
//     }

//     freiar() {
//         if (this.velocidade <= 0) return
//         this.velocidade--
//     }
// }

// const c1 = new Carro(`Fusca`)

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar()
// }

// console.log(c1)
//?         Carro { nome: 'Fusca', velocidade: 100 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Symbol |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 0
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return
//         this[_velocidade]++
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return
//         this[_velocidade]--
//     }
// }

// const c1 = new Carro(`Fusca`)

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar()
// }

// c1.velocidade = 2000

// console.log(c1)
//?         Carro { nome: 'Fusca', velocidade: 2000, [Symbol(velocidade)]: 100 }
//?         a velocidade está em 2000, más não é a velocidade real,
//?         a real sempre ficara em 100
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | APENAS EXEMPLO, amigo configurou velocidade errada |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 0
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return
//         this[_velocidade]++
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return
//         this[_velocidade]--
//     }
// }

// const c1 = new Carro(`Fusca`)

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar()
// }

// //?         APENAS EXEMPLO, amigo configurou velocidade errada
// c1.velocidade = 2000

// console.log(c1.velocidade)
//?         2000
//?         APENAS EXEMPLO, amigo configurou velocidade errada
///* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*| fixar a velocidade mesmo se alguém tentar mudar, não vai dar certo |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 0
//     }

//     get velocidade() {
//         return this[_velocidade]
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return
//         this[_velocidade]++
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return
//         this[_velocidade]--
//     }
// }

// const c1 = new Carro(`Fusca`)

// for (let i = 0; i <= 200; i++) {
//     c1.acelerar()
// }

// //?         APENAS EXEMPLO, amigo configurou velocidade errada
// c1.velocidade = 2000

// console.log(c1.velocidade)
//?         100
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | get e set |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 0
//     }

//     set velocidade(valor) {
//         console.log('SET')
//         if (typeof valor !== 'number') return
//         if (valor >= 100 || valor <= 0) return
//         this[_velocidade] = valor
//     }

//     get velocidade() {
//         console.log('GET')
//         return this[_velocidade]
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return
//         this[_velocidade]++
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return
//         this[_velocidade]--
//     }
// }

// const c1 = new Carro(`Fusca`)

// console.log(c1.velocidade)
//?         GET
//?         0
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | set |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 55
//     }

//     set velocidade(valor) {
//         console.log('SET')
//         if (typeof valor !== 'number') return
//         if (valor >= 100 || valor <= 0) return
//         this[_velocidade] = valor
//     }

//     get velocidade() {
//         console.log('GET')
//         return this[_velocidade]
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return
//         this[_velocidade]++
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return
//         this[_velocidade]--
//     }
// }

// const c1 = new Carro(`Fusca`)

// console.log(c1.velocidade)
//?         GET
//?         55
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*    | set | sempre tem que tem um valor no parametro
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const _velocidade = Symbol('velocidade')
// class Carro {
//     constructor(nome) {
//         this.nome = nome
//         this[_velocidade] = 55
//     }

//     set velocidade(valor) {
//         console.log('SET')
//         if (typeof valor !== 'number') return
//         if (valor >= 100 || valor <= 0) return
//         this[_velocidade] = valor
//     }

//     get velocidade() {
//         console.log('GET')
//         return this[_velocidade]
//     }

//     acelerar() {
//         if (this[_velocidade] >= 100) return
//         this[_velocidade]++
//     }

//     freiar() {
//         if (this[_velocidade] <= 0) return
//         this[_velocidade]--
//     }
// }

// const c1 = new Carro(`Fusca`)
// c1.velocidade = 99
//?         SET
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | ACESSANDO COMO ATRIBUTO |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class Pessoa {
//     constructor (nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     get nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`
//     }
// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// console.log(p1.nomeCompleto)
//?         Lucas Fernando
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | ACESSANDO COMO função |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class Pessoa {
//     constructor (nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`
//     }


// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// console.log(p1.nomeCompleto())
//?         Lucas Fernando
//todo =====================================================
// class Pessoa {
//     constructor (nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     get nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`
//     }

//     set nomeCompleto(valor) {
//         valor = valor.split(' ')
//         this.nome = valor.shift()
//         this.sobrenome = valor.join(' ')
//     }

// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// p1.nomeCompleto = 'LUCAS FERNANDO'
// console.log(p1.nomeCompleto)
//?         LUCAS FERNANDO
//todo =====================================================
// class Pessoa {
//     constructor (nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     get nomeCompleto() {
//         console.log('get') //?         apenas pra ver o get
//         return `${this.nome} ${this.sobrenome}`
//     }

//     set nomeCompleto(valor) {
//         valor = valor.split(' ')
//         this.nome = valor.shift()
//         this.sobrenome = valor.join(' ')
//         console.log('set')//?         apenas pra ver o set
//     }

// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// p1.nomeCompleto = 'LUCAS FERNANDO'
// console.log(p1.nome)
// console.log(p1.sobrenome)
//?         set
//?         LUCAS
//?         FERNANDO
//todo =====================================================