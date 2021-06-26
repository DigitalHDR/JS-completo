// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//           || 1° maneira de fazer, - codigo ||
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const data = document.querySelector('#data')
// const getData = new Date()
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// }

// data.innerHTML = getData.toLocaleString('pt-BR', opcoes)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//       || 2° maneira de fazer, melhor que a 3° ||
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function setDiaDaSemana(semanas) {
//     const semanaTexto = [
//         'Domingo',
//         'Segunda-Feira',
//         'Terça-Feira',
//         'Quarta-Feira',
//         'Quinta-Feira',
//         'Sexta-Feira',
//         'Sabado'
//     ]
//     return semanaTexto[semanas]
// }

// function setMesDoAno(mesParametro) {
//     const mesTexto = [
//         'Janeiro',
//         'Fevereiro',
//         'Março',
//         'Abril',
//         'Maio',
//         'Junho',
//         'Julho',
//         'Agosto',
//         'Setembro',
//         'Outubro',
//         'Novembro',
//         'Dezembro'
//     ]
//     return mesTexto[mesParametro]
// }

// const getData = new Date()
// const semanaDia = getData.getDay()

// const dia = getData.getDate()
// const mes = getData.getMonth() + 1
// const ano = getData.getFullYear()
// const horas = getData.getHours()
// const minutos = getData.getMinutes()

// const semanaTexto = setDiaDaSemana(semanaDia)
// const mesTexto = setMesDoAno(mes)

// function zeroAEsqueda(num) {
//     return num >= 10 ? num : `0${num}`
// }

// const data = document.querySelector('#data')
// data.innerHTML = `
//         ${semanaTexto},
//         ${dia} de 
//         ${mesTexto}, de 
//         ${ano} horário
//         ${zeroAEsqueda(horas)}:${zeroAEsqueda(minutos)}`
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//           || 3° maneira de fazer, + codigo ||
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function setDiaDaSemana(semanas) {
//     let semanaTexto

//     switch (semanas) {
//         case 0:
//             semanaTexto = 'Domingo'
//             break;
//         case 1:
//             semanaTexto = 'Segunda-Feira'
//             break;
//         case 2:
//             semanaTexto = 'Terça-Feira'
//             break;
//         case 3:
//             semanaTexto = 'Quarta-Feira'
//             break;
//         case 4:
//             semanaTexto = 'Quinta-Feira'
//             break;
//         case 5:
//             semanaTexto = 'Sexta-Feira'
//             break;
//         case 6:
//             semanaTexto = 'Sabado'
//             break;
//         default:
//             break;
//     }
//     return semanaTexto
// }

// function setMesDoAno(mesParametro) {
//     let mesTexto

//     switch (mesParametro) {
//         case 0:
//             mesTexto = 'Janeiro'
//             break;
//         case 1:
//             mesTexto = 'Fevereiro'
//             break;
//         case 2:
//             mesTexto = 'Março'
//             break;
//         case 3:
//             mesTexto = 'Abril'
//             break;
//         case 4:
//             mesTexto = 'Maio'
//             break;
//         case 5:
//             mesTexto = 'Junho'
//             break;
//         case 6:
//             mesTexto = 'Julho'
//             break;
//         case 7:
//             mesTexto = 'Agosto'
//             break;
//         case 8:
//             mesTexto = 'Setembro'
//             break;
//         case 9:
//             mesTexto = 'Outubro'
//             break;
//         case 10:
//             mesTexto = 'Novembro'
//             break;
//         case 11:
//             mesTexto = 'Dezembro'
//             break;
//         default:
//             break;
//     }
//     return mesTexto
// }

// const getData = new Date()
// const semanaDia = getData.getDay()

// const dia = getData.getDate()
// const mes = getData.getMonth() + 1
// const ano = getData.getFullYear()
// const horas = getData.getHours()
// const minutos = getData.getMinutes()

// const semanaTexto = setDiaDaSemana(semanaDia)
// const mesTexto = setMesDoAno(mes)

// function zeroAEsqueda(num) {
//     return num >= 10 ? num : `0${num}`
// }

// const data = document.querySelector('#data')
// data.innerHTML = `
//     ${semanaTexto},
//     ${dia} de 
//     ${mesTexto}, de 
//     ${ano} horário
//     ${zeroAEsqueda(horas)}:${zeroAEsqueda(minutos)}`