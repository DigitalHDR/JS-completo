//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*      | Declaração de funçao (function hoisting) | 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function falaOi() {
//     console.log('Oie')
// }
// falaOi()
//?         não importa onde vc declara a function o motor do javacript
//?         vai sempre colocar ela no topo
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | First-class objects (objetos de primeira classe) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const souUmDado = function () {
//     console.log('Sou um dado')
// }

// function executaFuncao(funcao) {
//     console.log('vou executar sua funçao abaixo')
//     funcao()
// }
// executaFuncao(souUmDado)
//?         vou executar sua funçao abaixo
//?         Sou um dado
//?         
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | arrow function |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const funcaoArrow = () => {
//     console.log('Sou uma função arrow')
// }
// funcaoArrow()
//?         Sou uma função arrow
//todo =====================================================
// function funcao() {
//     console.log('oie')
// }
// funcao()
//?         oie
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*               | function (argumentes) |
//*  argumenstos que sustenta todos os argumentos enviados
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function funcao() {
//     console.log(arguments)
// }
// funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//?         [Arguments] {
//?             '0': 'valor',
//?         '2': 2,
//?         '3': 3,
//?         '4': 4,
//?         '1': 1,
//?             '5': 5,
//?             '6': 6,
//?             '7': 7,
//?            '8': 8,
//?            '9': 9,
//?             '10': 10
//?         }
///todo =====================================================
// function funcao() {
//     console.log(arguments[0])
// }
// funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//?         valor
//todo =====================================================
// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f)
// }
// funcao(1, 2, 3)
//?         1 2 3 undefined undefined undefined
//todo =====================================================
function funcao() {
    console.log()
}
funcao()