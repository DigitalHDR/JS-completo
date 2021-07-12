// function criaPessoa(nome, sobrenome) {
//     return {
//         nome, sobrenome
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1)
//?         { nome: 'Lucas', sobrenome: 'Fernando' }
//todo =====================================================
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala: function (assunto) {
//             return `${nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala())
//?         Lucas está undefined.
//?         undefined por que ainda não tem nunhum argumento
//todo =====================================================
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala: function (assunto) {
//             return `${nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala('falando sobre JS'))
//?         Lucas está falando sobre JS.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | this |
//* vai ser sempre quem chamar o objeto
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala('falando sobre JS'))
//?         Lucas está falando sobre JS.
//todo =====================================================
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando')
// console.log(p1.fala('falando sobre JS'))
// console.log(p1.nome)
//?         Lucas está falando sobre JS.
//?         Lucas
//todo =====================================================
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`
//         },
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)
// const p2 = criaPessoa('Pabline', 'Bressan', 1.6, 42)

// console.log(p1.imc())

// console.log(p2.fala('falando sobre JS'))
//?         24.69
//?         Pabline está falando sobre JS.
//todo =====================================================
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} está ${assunto}.`
//         },
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)
// const p2 = criaPessoa('Pabline', 'Bressan', 1.6, 42)

// console.log(p1.imc())

// console.log(p2.fala('falando sobre JS'))

// console.log(p2.imc())
//?         24.69
//?         Pabline está falando sobre JS.
//?         16.41
//todo =====================================================
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} ${this.sobrenome} está ${assunto}.`
//         },
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)
// const p2 = criaPessoa('Pabline', 'Bressan', 1.6, 42)

// console.log(p1.imc(), p1.fala('Estudando JS'))

// console.log(p2.imc() ,p2.fala('falando sobre JS'))
//?         24.69 Lucas Fernando está Estudando JS.
//?         16.41 Pabline Bressan está falando sobre JS.
//todo =====================================================
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} ${this.sobrenome} está ${assunto}.`
//         },
//         altura: a,
//         peso: p,
//         imc() {
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)

// console.log(p1.fala('Estudando JS'), p1.imc())
//?         Lucas Fernando está Estudando JS. 24.69
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | get | getter
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} ${this.sobrenome} está ${assunto},`
//         },
//         altura: a,
//         peso: p,
//         get imc() { //? mudou aqui
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)

// console.log(p1.fala('Estudando JS'), p1.imc())
//?         TypeError: p1.imc is not a function
//! ########################################################
//!         veja a diferença entre esse e o de cima
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,
//         fala(assunto) {
//             return `${this.nome} ${this.sobrenome} está ${assunto},`
//         },
//         altura: a,
//         peso: p,
//         get imc() { //? mudou aqui
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)

// console.log(p1.fala('Estudando JS'), p1.imc) //? mudou aqui
//?         Lucas Fernando está Estudando JS, 24.69
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | com get e sem get |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,

//         nomeCompleto() {
//             //? COM THIS OU SEM THIS VAI FUNCIONAR
//             return `${this.nome} ${this.sobrenome}`
//         },

//         fala(assunto) {
//             return `${this.nome} ${this.sobrenome} está ${assunto},`
//         },

//         altura: a,
//         peso: p,
//         get imc() {
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)

// console.log(p1.nomeCompleto())
//?         Lucas Fernando
//! ########################################################
// function criaPessoa(nome, sobrenome, a, p) {
//     return {
//         nome,
//         sobrenome,

//         get nomeCompleto() { //? mudou aqui
//             //? COM THIS OU SEM THIS VAI FUNCIONAR
//             return `${this.nome} ${this.sobrenome}`
//         },

//         fala(assunto) {
//             return `${this.nome} ${this.sobrenome} está ${assunto},`
//         },

//         altura: a,
//         peso: p,
//         get imc() {
//             const indice = this.peso / (this.altura **2)
//             return indice.toFixed(2)
//         }
//     }
// }

// const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)

// console.log(p1.nomeCompleto) //? mudou aqui
//?         Lucas Fernando
//todo =====================================================
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        // GETTER
        get nomeCompleto() {
            //? COM THIS OU SEM THIS VAI FUNCIONAR
            return `${this.nome} ${this.sobrenome}`
        },

        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está ${assunto},`
        },

        altura: a,
        peso: p,
        get imc() {
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Lucas', 'Fernando', 1.8, 80)
p1.nomeCompleto = 'maria oliveira silva'
console.log(p1.nomeCompleto)