// let num1 = 1
// let num2 = 2.5
// console.log(num1 + num2)
// 3.5
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                     toString() (method)
// Retorna uma representação de string de um objeto.
// let num1 = 1
// let num2 = 2.5
// console.log(num1.toString() + num2)
// 12.5
// observe que num1 apenas nesse .log foi convertido para string
// por isso foi feito a concatenação
// ==============================================================
// let num1 = 1
// let num2 = 2.5
// console.log(num1.toString() + num2)
// console.log(typeof(num1))
// 12.5
// number
// perceba que num1 ainda continua sendo number
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  toFixed() (method)
// O número de dígitos que aparecem depois do ponto decimal
// let num1 = 10.570394678
// console.log(num1.toFixed(2))
// 10.57
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  isInteger() (method)
// Retorna verdadeiro se o valor passado for um inteiro,
// falso caso contrário.
// let num1 = 10
// console.log(Number.isInteger(num1))
// true
// ==============================================================
// let num1 = 10.23
// console.log(Number.isInteger(num1))
// // false
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  isNaN() (method)
// determina se o valor é NaN ou não
// let num1 = 10.23
// let temp = num1 * 'Olá'
// console.log(Number.isNaN(temp))
// true
// ==============================================================
// let num1 = 10.23
// let temp = num1 * '5'
// console.log(Number.isNaN(temp))
// false
// numca fazer calculo com string
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  IEEE 754-2008
//                  (((((Explicação de como fazer chegar a 0.8)))))
// let num1 = 0.7
// let num2 = 0.1

// num1 += num2
// num1 += num2
// num1 += num2

// num1 = parseFloat(num1.toFixed(2))
// console.log(num1)
// console.log(Number.isInteger(num1))
// 1
// true
// ==============================================================
// let num1 = 0.7
// let num2 = 0.1

// num1 = ((num1 * 100) + (num2 * 100)) / 100

// console.log(num1)
// console.log(Number.isInteger(num1))
// 0.8