// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const data = new Date('2021-06-29')
// const diaSemana = data.getDay()
// let diaDaSemanaTexto

// if (diaSemana === 0) {
//     diaDaSemanaTexto = 'Domingo'
// } else if (diaSemana === 1) {
//     diaDaSemanaTexto = 'Segunda'
// } else if (diaSemana === 2) {
//     diaDaSemanaTexto = 'Terça'
// } else if (diaSemana === 3) {
//     diaDaSemanaTexto = 'Quarta'
// } else if (diaSemana === 4) {
//     diaDaSemanaTexto = 'Quinta'
// } else if (diaSemana === 5) {
//     diaDaSemanaTexto = 'Sexta'
// } else {
//     diaDaSemanaTexto = 'Sabado'
// } 

// console.log(diaSemana, diaDaSemanaTexto)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const data = new Date('2021-06-25 00:00:00')
// const diaSemana = data.getDay()
// let diaDaSemanaTexto

// switch (diaSemana) {
//     case 0:
//         diaDaSemanaTexto = 'Domingo'
//         break;
//     case 1:
//         diaDaSemanaTexto = 'Segunda'
//         break;
//     case 2:
//         diaDaSemanaTexto = 'Terça'
//         break;
//     case 3:
//         diaDaSemanaTexto = 'Quarta'
//         break;
//     case 4:
//         diaDaSemanaTexto = 'Quinta'
//         break;
//     case 5:
//         diaDaSemanaTexto = 'Sexta'
//         break;
//     case 6:
//         diaDaSemanaTexto = 'Sabado'
//         break;
//     default:
//         break;
// }

// console.log(diaSemana, diaDaSemanaTexto)
//          5 Sexta
//          após todos os case deve-se ter um break
//          por último coloque o default, se quiser
//          aqui coloque ou nao o break
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function getDiaDaSemanaTexto(testeDeParametro) {
//     let diaDaSemanaTexto

//     switch (testeDeParametro) {
//         case 0:
//             diaDaSemanaTexto = 'Domingo'
//             break;
//         case 1:
//             diaDaSemanaTexto = 'Segunda'
//             break;
//         case 2:
//             diaDaSemanaTexto = 'Terça'
//             break;
//         case 3:
//             diaDaSemanaTexto = 'Quarta'
//             break;
//         case 4:
//             diaDaSemanaTexto = 'Quinta'
//             break;
//         case 5:
//             diaDaSemanaTexto = 'Sexta'
//             break;
//         case 6:
//             diaDaSemanaTexto = 'Sabado'
//             break;
//         default:
//             break;
//     }

//     return diaDaSemanaTexto
// }

// const data = new Date('2021-06-25 00:00:00')
// const diaSemana = data.getDay()

// const diaDaSemanaTexto = getDiaDaSemanaTexto(diaSemana)

// console.log(diaSemana, diaDaSemanaTexto)
// 5 Sexta
// @@@@@@@@@@@@@@@@@@@@@@@@
// EXPLICAÇÃO DE PARAMETROS E ARGUMENTOS (para o switch)

// 1° var data recebe todas as coisas com hora e dia
// 2° var diaSemana recebe de data o dia atual

// 3° var (diaDaSemanaTexto) recebe a função (getDiaDaSemanaTexto),
// e tem como argumento a var (diaSemana).

// 4° a função (getDiaDaSemanaTexto) tem o seu proprio parametro (testeDeParametro),
// é obrigatorio, e que no caso faz referencia com a var diaSemana, que está sendo 
// passado para a função como argumento. 
// e tudo isso retorna e é recebido para a var diaDaSemanaTexto

// 5° é mostrado no log tudo que esta dentro de diaDaSemanaTexto
// @@@@@@@@@@@@@@@@@@@@@@@@@
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%