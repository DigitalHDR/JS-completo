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
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function funcao(a, b, c, d, e, f) {
//     console.log(a, b, c, d, e, f)
// }
// funcao(1, 2, 3)
//?         1 2 3 undefined undefined undefined
//todo =====================================================
// function funcao(a, b) {
//     console.log(a + b)
// }
// funcao(2)
NaN
//todo =====================================================
// function funcao(a, b) {
//     b = b || 4
//     console.log(a + b)
// }
// funcao(2)
//?         6
//todo =====================================================
// function funcao(a, b = 5) {
//     console.log(a + b)
// }
// funcao(2)
//?         7
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2)
//?         11
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , 10)
//?         16
//?         o valor do parametro b agora recebe o argumento 10
//?         então b passa a ser 10
//?         por isso da 16
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , 10, 20)
//?         32
//?         se o valor estiver dentro do argumento ele tem maior prioridade
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , '10', 20)
//?         21020
//?         se tiver uma string vai ser tudo concatenado
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , 0, 20)
//?         22
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , undefined, 20)
//?         27
//?         se no argumento tiver um valor undefined
//?         passa também a valer o que está dentro do parametro
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , , 20)
//?         Error: 
//?         c:\JS completo\seção 4\node_c4b2d87772a70.tmp:138
//?         funcao(2 , , 20)
//?         NÃO SE PODE ENVIAR UM ARGUMENTO COM VALOR VAZIO.
//todo =====================================================
// function funcao(a, b = 5, c = 4) {
//     console.log(a + b + c)
// }
// funcao(2 , null, 20)
//?         22
//?         se no argumento tiver com null, no parametro recebe null
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade)
// }
// funcao({ nome: 'Lucas', sobrenome: 'Fernando', idade: 32 })
//?         Lucas Fernando 32
//todo =====================================================
// function funcao({ nome, sobrenome, idade }) {
//     console.log(nome, sobrenome, idade)
// }

// let obj = { nome: 'Lucas', sobrenome: 'Fernando', idade: 32 }
// funcao(obj)
//?         Lucas Fernando 32
//todo =====================================================
// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3)
// }

// funcao(['lucas', 'fernando', 32])
//?         lucas fernando 32
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function funcao(operador, acumulador, numeros) {
//     console.log(operador, acumulador, numeros)
// }

// funcao('+', 0, [1, 2, 3, 4, 5, 6, 7, 8, 9])
//?         + 0 [
//?           1, 2, 3, 4, 5,
//?           6, 7, 8, 9
//?         ]
//todo =====================================================
// function funcao(operador, acumulador, ...numeros) { //? mudou aqui
//     console.log(operador, acumulador, numeros)
// }

// funcao('+', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
//?         + 0 [
//?           1, 2, 3, 4, 5,
//?           6, 7, 8, 9
//?         ]
//todo =====================================================