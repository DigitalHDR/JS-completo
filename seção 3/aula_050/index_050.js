// let a = 'A'
// let b = 'B'
// let c = 'C'

// let letra = [a, b, c] = [1, 2, 3]

// console.log(a, b, c)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Atribuição via desestruturação |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let a = 'A'
// let b = 'B'
// let c = 'C';

// [a, b, c] = [1, 2, 3]
//?         aqui do lado esquerdo é a desestruturação
//?         como a,b,c já existem(variaveis), aqui está reatribuindo
//?         o valor delas,(modificando)
//?         do lado direito é o array

// console.log(a, b, c)
//! ########################################################
//!             IMPORTANTE
//! ########################################################
//?         aqui como o Array não está dentro de um variavel da erro
//?         perceba que no ultimo tem (C, tem ponto e virgula), para
//?         não dar erro.
//?         SEMPRE QUE POSSIVEL COLOQUE DENTRO DE UMA VARIAVEL
//todo =====================================================
// let a = 'A'
// let b = 'B'
// let c = 'C'

// const numeros = [1, 2, 3];
// [a, b, c] = numeros

// console.log(a, b, c)
//?          1 2 3
//todo =====================================================
// let a = 'A'
// let b = 'B'
// let c = 'C'

// const letras = [b, c, a];
// [a, b, c] = letras

// console.log(a, b, c)
//?         B C A
//todo =====================================================
//?              0  1  2  3  4  5  6  7  8 (NÚMERO DE ÍNDICE)
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(numeros[0])
//?         1
//todo =====================================================
// //?              0  1  2  3  4  5  6  7  8 (NÚMERO DE ÍNDICE)
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const primeiroNumero = numeros[0]

// console.log(primeiroNumero)
//?         1
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | Atribuição via desestruturação |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//?              0  1  2  3  4  5  6  7  8 (NÚMERO DE ÍNDICE)
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [primeiroNumero, segundoNumero] = numeros

// console.log(primeiroNumero, segundoNumero)
//?         1 2
//todo =====================================================
//?                0     1     2     3     4     5     6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

// const [primeiroNumero, segundoNumero] = numeros

// console.log(primeiroNumero, segundoNumero)
//?         1000 2000
//todo =====================================================
//?                0     1     2     3     4     5     6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

// const [primeiroNumero, segundoNumero,...resto] = numeros

// console.log(primeiroNumero, segundoNumero, resto)
//?          1000 2000 [
//?             3000, 4000,
//?             5000, 6000,
//?             7000, 8000,
//?             9000
//?             ]
//?         perceba que primeiroNumero, segundoNumero está por
//?         fora, já resto está dentro de um operador spreed
//?         que contém todo o resto dos arrays
//todo =====================================================
//?                0     1     2     3     4     5     6     7     8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]

// const [um, , tres, , cinco] = numeros

// console.log(um, tres, cinco)
//?         1000 3000 5000
//?         aqui perceba que foi pulados  o 2 e 4.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                | array dentro de array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//?                  0         1        2  
//?                0 1 2    0 1 2    0 1 2
// const numeros = [ [1,2,3], [4,5,6], [7,8,9] ]

// console.log(numeros[1][2])
//?         6
//?         explicação 
//?         1° o javascript pegou o (indice 1), sim como está no log
//?         2° dentro de (indice 1) tem os valores 4,5,6
//?         3° foi pedido no log o que está no (indece 2)=que tem o valor (6)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | array dentro de array + desestruturação | FICA COMPLEXO D+
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//?                  0         1        2  
//?                0 1 2    0 1 2    0 1 2
// const numeros = [ [1,2,3], [4,5,6], [7,8,9] ]
// const [,[, ,seis]] = numeros
// console.log(seis)
//?         6
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | array dentro de array + desestruturação | + fácil
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//?                  0         1        2  
//?                0 1 2    0 1 2    0 1 2
// const numeros = [ [1,2,3], [4,5,6], [7,8,9] ]
// const [lista1, lista2, lista3] = numeros
// console.log(lista3)
//?         [ 7, 8, 9 ]
//todo =====================================================
//?                  0         1        2  
//?                0 1 2    0 1 2    0 1 2
// const numeros = [ [1,2,3], [4,5,6], [7,8,9] ]
// const [lista1, lista2, lista3] = numeros
// console.log(lista3)
// console.log(lista3[1])
//?          [ 7, 8, 9 ]
//?          8
//todo =====================================================