//||| aritméticos
//||| ( )
//||| ** (potência)
//||| * (multiplicação) ||| % (retorna o resto da divisão) (o que vier primeiro)
//||| + (adição) ||| - (subtração) (o que vier primeiro)
//||| / (divisão)
// ==================================================
// const num1 = '5'
// const num2 = 10
// console.log(num1 + num2)
// 510

// console.log(num1 * num2)
// 50

// console.log(num1 / num2)
// 0.5

// console.log(num1 - num2)
// -5
// ==================================================
// const num1 = 10
// const num2 = 3
// console.log(num1 % num2)
// 5
// ==================================================
// const num1 = 10
// const num2 = 5
// console.log(num1 % num2)
// 0
// ==================================================
// const num1 = 10
// const num2 = 5
// console.log(num1 + num2 + num1 + num2)
// 30
// ==================================================
// const num1 = 5
// const num2 = 2
// const num3 = 10
// console.log(num1 + num2 * num3)
// 25
// (foi é igual na matematica foi preito primeiro a conta de multiplicação)
// e depois a de adição
// ==================================================
// const num1 = 5
// const num2 = 2
// const num3 = 10
// console.log((num1 + num2) * num3)
// 70
// colocando parenteses para o que vc quer que sejá feito primeiro
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// operadores de incremento de descremento
// esse de baixo funciona com + || -
// ==================================================
// let contador = 1
// tem que ser com let para variar se for com const da erro.

// contador++
//2
// contador++
//3
// contador++
//4
// contador++
//5
// console.log(contador)
//5
// ==================================================
// outra maneira de se fazer, mais tem diferença
// let contador = 1
// ++contador
//2
// ++contador
// 3
// ++contador
// 4
// ++contador
// 5
// console.log(contador)
// 5
// ==================================================
// peceba aqui que não ira somar
// let contador = 1
// console.log(contador++)
// 1
// porque a adição veio depois do valor
// ==================================================
// aqui é somado pois vem antes do valor
// let contador = 1
// console.log(++contador)
//2
// ==================================================
// let contador = 1
// console.log(contador++)
// 1
// aqui como foi adicionado no final o proximo contador ira ficar como 2
// console.log(contador)
// 2
// ==================================================
// let contador = 1
// console.log(++contador)
// 1

// console.log(contador)
// 2
// aqui apenas exibiu o valor que já foi somado em cima
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// BOAS PRATICAS, NÃO COLOCAR PRA FAZER QUALQUER TIPO DE CALCULO NO CONSOLE
// FAÇA TODO OS CALCULOS ANTES, PARA NÃO MISTURAR AS COISA, PARA SE CASO HAVER 
// UM ERRO SER FACÍL DE ACHAR
// EXEMPLO

// let contador = 1
// ++contador
// console.log(contador)
//2
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// isso pode se fazer com qualquer operador 
// let contador = 0
// contador += 2
// contador += 2
// contador += 2
// += é o mesmo que (contador + contador) 
// console.log(contador)
// 6
// =======================================================================
// let contador = 2
// contador *= 2
// += é o mesmo que (contador + contador) 
// console.log(contador)
// 4
// =======================================================================
// let contador = 2
// contador -= 2
// += é o mesmo que (contador + contador) 
// console.log(contador)
// 0
// =======================================================================
// NaN - NOT A NUMBER (SIGNIFICA QUA ALGO NÃO PATEU AO DEU ERRADO)
// const num1 = 10
// const num2 = 'lucas'
// console.log(num1 * num2)
// NaN
// não tem como multiplicar uma string
// =======================================================================
// const num1 = 10
// number 
// const num2 = '5'
// string 
// console.log(num1 * num2)
// 50
// isso o javasript até pode resolver mais tome cuidada faça numero com numero para calculos
// ===============================================parseInt========================
// const num1 = 10
// number 
// const num2 = parseInt ('5')
// vira um numero inteiro por causa do parseInt numero inteiro 
// console.log(num1 * num2)
// 50
// console.log(typeof num2)
// number 
// ==================================================parseFloat=====================
// const num1 = 10
// number 
// const num2 = parseFloat ('5.2')
// vira um numero com casas com decemais após ponto 
// console.log(num1 + num2)
// 15.2
// ========================================Number===============================
// const num1 = 10
// const num2 = Number('5.2')
// vira um numero com isso
// console.log(num1 + num2)
// 15.2
// ========================================Number===============================
// const num1 = 10
// const num2 = Number('5')
// vira um numero com isso
// console.log(num1 + num2)
// 15