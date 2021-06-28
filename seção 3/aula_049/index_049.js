//?         let tem escopo de bloco
//?         var só tem escopo de função
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'pabline'

// if (verdadeira) {
//     let nome = 'julia'

//     if (verdadeira) {
//         console.log(nome, nome2)
//     }
// }
//?          julia pabline
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'pabline'

// if (verdadeira) {
//     let nome = 'julia'

//     if (verdadeira) {
//         let nome = 'outra coisa'
//         console.log(nome, nome2)
//     }
// }
//?          outra coisa pabline
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'pabline'

// if (verdadeira) {
//     let nome = 'julia'

//     if (verdadeira) {        
//         console.log(nome, nome2)
//     }
// }
//?         julia pabline
//?         o javascript funciona da seguinte forma, 
//?         veja que tem um log dentro de um if 1° o javascript
//?         procura dentro desse isso a variavel nome e nome2,
//?         depois ele procura no escopo que ele foi criado,
//?         no caso ele encontra a var nome então a 1° var ok,
//?         depois ele vai pro global no caso e encontra a var nome2
//?         e pronto o log é exibido com esses valores.
//todo =====================================================
// const verdadeira = true

// var nome2 = 'pabline'

// if (verdadeira) {
    
//     if (verdadeira) {        
//         console.log(nome, nome2)
//     }
// }
// //?         (ReferenceError: nome is not defined)
//?         gera um erro pois não foi encontrada a var nome em 
//?         nenhum lugar
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'lucas'

// var nome2 = 'ana'
// console.log(nome, nome2)

// if (verdadeira) {
//     let nome = 'julia'

//     if (verdadeira) {        
//         let nome = 'outra coisa'
//     }
// }
//?         lucas ana
//?         no escopo global o var nome2 foi redeclarada
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'lucas'


// if (verdadeira) {
//     let nome = 'julia'
    
//     if (verdadeira) {    
//         let nome = 'outra coisa'
//         var nome2 = 'ana'   
//         console.log(nome, nome2)
//     }
// }
//?         outra coisa ana
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'lucas'


// if (verdadeira) {
//     let nome = 'julia'
    
//     if (verdadeira) {    
//         let nome = 'outra coisa'
//         var nome2 = 'ana'   
//     }
// }
// console.log(nome, nome2)
//?         lucas ana
//?         não ficou com lucas lucas, pois a var nome2 foi 
//?         redeclarada dentro do if com (var)
//todo =====================================================
// const verdadeira = true

// let nome = 'lucas'
// var nome2 = 'lucas'


// if (verdadeira) {
//     let nome = 'julia'
    
//     if (verdadeira) {    
//         let nome = 'outra coisa'
//         let nome2 = 'ana'   
//     }
// }
// console.log(nome, nome2)
//?          lucas lucas
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | com função |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function falaOi() {
//     var nome = 'lucas'
//     console.log(nome)
// }
// falaOi()
//?         lucas
//todo =====================================================
// function falaOi() {
//     var nome = 'lucas'
// }
// console.log(nome)
// falaOi()
//?         ReferenceError: nome is not defined
//?         aqui a (var,let,const) só funciona dentro do seu escopo
//todo =====================================================
// var nome = 'lucas'

// function falaOi() {
//     console.log(nome)
// }
// falaOi()
//?         lucas
//todo =====================================================
// const verdadeira = true

// function falaOi() {
//     var sobreNome = 'fernando'
//     if (verdadeira) {
//         let nome = 'lucas'
//         console.log(sobreNome)
//     }
//     console.log(nome)
// }
// falaOi()
//?         ReferenceError: nome is not defined
//?         o mesmo do exemplos de cima let nome faz parte somente
//?         do escopo do if
//todo =====================================================
// const verdadeira = true

// function falaOi() {
//     var sobreNome = 'fernando'
//     if (verdadeira) {
//         let nome = 'lucas'
//         console.log(sobreNome)
//         console.log(nome)
//     }
// }
// falaOi()
//?         fernando
//?         lucas
//todo =====================================================