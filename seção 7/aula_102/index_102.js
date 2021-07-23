// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }
// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// console.log(p1)
//?         Pessoa { nome: 'Lucas', sobrenome: 'Fernando' }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | metodos class |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     falar() {
//         console.log(`${this.nome} está falando`)
//     }

//     comer() {
//         console.log(`${this.nome} está comendo`)
//     }

//     beber() {
//         console.log(`${this.nome} está bebendo`)
//     }
// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// console.log(p1.comer())
//?         Lucas está comendo
//todo =====================================================
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} está falando`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Lucas', 'Fernando')
const p2 = new Pessoa2('Becky', 'China')

console.log(p2)