//?         Função construtora => objetos
//? inicia sempre com letra maisucula

//todo =====================================================
//? Função fabrica => objetos

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Função construtora |
//*         Na função construtora sempre que for adicionar
//*         uma nova pessoa deve-se colocar a palavra new 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// const p2 = new Pessoa('Pabline', 'Bressan')

// console.log(p1.nome)
//?         Lucas
//todo =====================================================
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome

//     this.metodo = () => {
//         console.log(`${this.nome}: 'Sou um metodo'`)
//     }
// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// const p2 = new Pessoa('Pabline', 'Bressan')

// p1.metodo()
//?         Lucas: 'Sou um metodo'
//todo =====================================================
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome

//     this.metodo = () => {
//         console.log(`${this.nome}: 'Sou um metodo'`)
//     }
// }

// const p1 = new Pessoa('Lucas', 'Fernando')
// const p2 = new Pessoa('Pabline', 'Bressan')

// p2.metodo()
//?         Pabline: 'Sou um metodo'
//todo =====================================================
function Pessoa(nome, sobrenome) {
    //? atributos ou métodos privados
    const id = 12345
    const metodoInterno = () => {

    }

    //? atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () => {
        console.log(`${this.nome}: 'Sou um metodo'`)
    }
}

const p1 = new Pessoa('Lucas', 'Fernando')
const p2 = new Pessoa('Pabline', 'Bressan')

p2.metodo()