/* operadores de comparação
    >       maior que
    >=      maior que ou igual a
    <       menor que
    <=      menor que ou igual a
    ===     igualdade estrita (valor e tipo)
    !==     diferente estrita (valor e tipo)
---------------------------------------------------
    ==      igualdade (valor)       [não é recomendado]
    !=      diferente (valor)       [não é recomendado]
*/
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  > (maior que)
// console.log(10 > 5)
//                  true
// ==========================================================
//                  com variavel
// const comp = 10 > 5
// console.log(comp)
//                  true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  >= (maior que ou igual a)
// const comp = 10 >= 5
// console.log(comp)
//                  true
// ==========================================================
// const comp = 10 >= 10
// console.log(comp)
//                  true
// ==========================================================
// const comp = 10 >= 11
// console.log(comp)
//                  false
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  < (menor que)
// const comp = 10 < 11
// console.log(comp)
//                  true
// ==========================================================
//                  < (menor que) com variaveis
// const num1 = 10
// const num2 = 11
// const comp = num1 < num2
// console.log(comp)
//                  true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  <= (menor que ou igual a)
// const comp = 10 <= 11
// console.log(comp)
//                  true
// ==========================================================
// const comp = 12 <= 11
// console.log(comp)
//                  false
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  == igualdade (valor) [não é recomendado]
// const num1 = 10
// const num2 = 10
// const comp = num1 == num2
// console.log(comp)
//                  true
// ==========================================================
// const num1 = 10
// const num2 = 11
// const comp = num1 == num2
// console.log(comp)
//                  false
// ==========================================================
//                  esse é o motivo para não usar == (igualdade)
//                  mesmo sendo uma numero e outro string retorna verdadeiro
//                  e sabemos que tem diferença de numero para texto
// const num1 = 10
// const num2 = '10'
// const comp = num1 == num2
// console.log(comp)
//                  true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  === igualdade estrita (valor e tipo)
//                  nesse caso o sinal de igualdade estrita 
//                  retorna false porque são coisas diferentes
//                  um é numero e o outro é texto
// const num1 = 10
// const num2 = '10'
// const comp = num1 === num2
// console.log(comp)
//                  false
// ==========================================================
//                     agora os dois são números
// const num1 = 10
// const num2 = 10
// const comp = num1 === num2
// console.log(comp)
//                  true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  != diferente (valor) [não é recomendado]
// const num1 = 10
// const num2 = 10
// const comp = num1 != num2
// console.log(comp)
//                  false
//                  falso porque os dois são igual
// ==========================================================
//                  esse é o motivo para não usar
//                  != diferente (valor) [não é recomendado]
// const num1 = 10
// const num2 = '10'
// const comp = num1 != num2
// console.log(comp)
//                  false
//                  sabemos que um é número e o outro é texto
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  !== diferente estrita (valor e tipo)
// const num1 = 10
// const num2 = '10'
// const comp = num1 !== num2
// console.log(comp)
//                  true
//                  são diferente pois um é número e o outro é texto
// ==========================================================
// const num1 = 10
// const num2 = 10
// const comp = num1 !== num2
// console.log(comp)
// false