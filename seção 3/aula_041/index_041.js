//          && = e     (todos tevem ser true para retornar true)
//          || = ou    (basta um ser true para retornar true)
//          !  = não   (nega alguma coisa)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numero = 10

// if (numero >= 0 && numero <= 5) {
//     console.log('sim o número é maior que zero')
// }
//          retorna vazio
// ========================================================
// const numero = 10

// if (numero >= 0 && numero <= 5) {
//     console.log('sim o número está entre 0 e 5')
// } else {
//     console.log('o número NÃO está entre 0 e 5')
// }
//          o número NÃO está entre 0 e 5
// ========================================================
// const numero = 5

// if (numero >= 0 && numero <= 5) {
//     console.log('sim o número está entre 0 e 5')
// } else {
//     console.log('o número NÃO está entre 0 e 5')
// }
//          sim o número está entre 0 e 5
// ========================================================
// const numero = 10

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5')
// } else if (numero >= 6 && numero <= 8) {
//     console.log('O número está entre 6 e 8')
// } else if (numero >= 9 && numero <= 11) {
//     console.log('O número está entre 9 e 11')
// } else {
//     console.log('O número não está entre 0 e 11')
// }
//          O número está entre 9 e 11
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numero = 10

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5')
// } else if (numero >= 6 && numero <= 8) {
//     console.log('O número está entre 6 e 8')
// } else if (1 === 1) {
//     console.log('literal')
// } else if (numero >= 9 && numero <= 11) {
//     console.log('O número está entre 9 e 11')
// } else {
//     console.log('O número não está entre 0 e 11')
// }
//          literal

//          observe que no if e else após encontrar uma verdadeira
//          já acaba ali e não execura mais nada
//          1 é igual a 1, pois isso já retorna esse escopo, mais
//          10 está entre 9 e 11, e também é verdadeira, mais foi
//          executado somente o 1°
// ========================================================
// const numero = 10

// if (numero >= 0 && numero <= 5) {
//     console.log('O número está entre 0 e 5')
// } else if (numero >= 6 && numero <= 8) {
//     console.log('O número está entre 6 e 8')
// } else if (1 === 1) {
//     console.log('literal')
// } else if (numero >= 9 && numero <= 11) {
//     console.log('O número está entre 9 e 11')
// } else {
//     console.log('O número não está entre 0 e 11')
// }

// console.log('aqui é o resto do código')
//          literal
//          aqui é o resto do código

//          vejá que após encontrado a 1° condição é executado o
//          resto do código fora das condições if e else
// ========================================================
