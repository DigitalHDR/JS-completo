// function saudacao() {
//     console.log('Bom dia!')
// }

// saudacao()
// Bom dia!

// saudacao()
// isso chama a function para ser executada
// =======================================================
// function saudacao(nome) {
//     console.log(`Bom dia! ${nome}`)
// }

// saudacao('lucas')
// 1° percerba que no parametro da função tem a palavra nome é bem parecido
// com uma variavel.
// 2° quando a função ser executada perceba que dentro dela tem a palavra lucas
// isso faz com que essa palavra lucas sejá enviada para dentro do parametro da função
// por isso é bem parecido com uma variavel
// 3° agora dentro do escopo ou bloco dessa função pode-se usar o valor desse parametro 
// que é a palavra lucas, com isso temos no console.log a frase.
// Bom dia! lucas
// =======================================================
//                  A função é reutilizavel
// function saudacao(nome) {
//     console.log(`Bom dia! ${nome}`)
// }

// saudacao('lucas')
// saudacao('pabline')
// Bom dia! lucas
// Bom dia! pabline
// =======================================================
// function saudacao(nome) {
//     console.log(`Bom dia! ${nome}`)
// }

// const variavel = saudacao('lucas')
// console.log(variavel)
// Bom dia! lucas
// undefined
// como não foi especificado o que vc quer que retorne vai ser undefined
// =======================================================
// function saudacao(nome) {
//     return `Bom dia! ${nome}`
// }

// const variavel = saudacao('lucas')
// console.log(variavel)
// Bom dia! lucas

// aqui nesse caso a função não exibi nada (NÃO RETORNA NADA)
//*****     *****       *****       *****       *****       */
// mais o parametro recebeu o argumento
// FALAMOS ARGUMENTO QUANDO PASSAMOS ALGO PRA OS PARAMETROS
//*****     *****       *****       *****       *****       */
// que a função retornou
// Bom dia! lucas, é o que está dentro da variavel, vejá + abaixo
// =======================================================
// function saudacao(nome) {
//     return `Bom dia! ${nome}`
// }

// const variavel = saudacao('lucas')
// assim (NÃO RETORNA NADA) na tela, mais a variavel recebeu o valor
// que a função retornou
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// console.log(soma(2, 2))
// 4
// =======================================================
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// console.log(soma(2, 2))
// console.log(soma(5, 10))
// console.log(soma(50, 100))
// 4
// 15
// 150
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  Não é possível acessar o que está dentro do
// escopo ou bloco da função
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// console.log(resultado)
//ISSO GERA UM ERRO
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  variavel com mesmo nome porém
// 1° dentro do escopo e 2° fora do escopo
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma(2, 2)
// console.log(resultado)
// 4
// perceba que não da erro pois as duas variavel mesmo tendo o mesmo nome
// são distintas pois cada uma está em um lugar diferente.
// não se pode acessar de fora o que está dentro da função e nem modificala
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  + sobre o return
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
//     console.log('Olá mundo')
// }

// const resultado = soma(2, 2)
// console.log(resultado)
// 4
// perceba que vai ser exibido somente 4
// perceba que dentro da função abaixo da linha do return
// ha um console.log, mais não é exibido nada, do que está 
// abaixo de return, é como se acabasse tudo nessa linha (do return)
// =======================================================
// function soma(x, y) {
//     const resultado = x + y
//     console.log('Olá mundo')
//     return resultado
// }

// const resultado = soma(2, 2)
// console.log(resultado)
// Olá mundo
// 4
// aqui como o log ficou a cima de return foi exibido
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  sem enviar nada para o parametro retorna NaN
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma()
// console.log(resultado)
// NaN
// =======================================================
// acontece a mesma coisa de enviar para o parametro somente um valor
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma(5)
// console.log(resultado)
// NaN
// da NaN pois dentro da funçao está se somando ou concatenando algo
// =======================================================
// function soma(x, y) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma('lucas', ' fernando')
// console.log(resultado)
// lucas fernando
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  valores pre definidos para o parametro
// function soma(x = 1, y = 2) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma()
// console.log(resultado)
// 3
// =======================================================
//                  apenas um valor pre definido no parametro
// e apenas um valor enviado para o parametro
// function soma(x = 1, y = 2) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma(4)
// console.log(resultado)
// 6
// da 6 pois 4 vai ser enviado para o valor 4, e 4+2=6
// =======================================================
//                  mesmo com valores pre definidos no parametro
// se tiver sendo enviado valores para o parametro vão ser sobre postos
// ficando com os valores enviados
// function soma(x = 1, y = 2) {
//     const resultado = x + y
//     return resultado
// }

// const resultado = soma(4, 4)
// console.log(resultado)
// 8
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  função anônima (tem que ter ponto e virgula no seu final)
// const raiz = function (n) {
//     return n ** 0.5
// }
// console.log(raiz(10)) 
// 3.1622776601683795
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  arrow function
// const raiz = (n) => {
//     return n ** 0.5
// }
// console.log(raiz(10)) 
// 3.1622776601683795
// =======================================================
//                  arrow function ainda mais abreviada
// const raiz = n => n ** 0.5
// console.log(raiz(10))
// 3.1622776601683795
// =======================================================