const nome = 'lucas'    //string
const nome1 = "lucas"   //string
const nome2 = `lucas`   //string
// ===========================================================================
const num1 = 10
const num2 = 10.52

let nomeAluno   // undefined = não aponta pra local nenhum na memória
let sobreNomeAluno = null   //nulo não aponta pra local nenhum na memória(desconfigura uma variável)

const aprovado = true   //valor boleano
const aprovado2 = false   //valor boleano

console.log(typeof nome, nome)  //mostra o tipo e o valor
console.log(typeof num1, num1)  //mostra o tipo e o valor
// ===========================================================================
let a = 2
const b = a
console.log(a, b)   //2, 2

a = 3
console.log(a, b)   //3, 2