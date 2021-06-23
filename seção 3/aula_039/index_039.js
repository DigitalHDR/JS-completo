//                  Qualquer coisa diferente disso retorna true/
// false
// 0
// ''
// ""
// ``
// null
// undefined
// NaN
// ==============================================================
// console.log('lucas' && 'pabline')
//                  pabline
//                  retorna pabline pois primeiro checa a 1° string
//                  como não está vazia é true.
//                  &&
//                  2° é true pois tem coisa dentro
// ==============================================================
// console.log('lucas' && '' && 'pabline')
//                  retorna vazio
//                  pois tem uma string vazia
// ==============================================================
// console.log('lucas' && NaN && 'pabline')
//                  NaN
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function falaOi() {
//     return 'oi'
// }

// const vaiExecutar = false

// console.log(vaiExecutar && falaOi())
//                  false
// ==============================================================
// function falaOi() {
//     return 'oi'
// }

// const vaiExecutar = 'julia'

// console.log(vaiExecutar && falaOi())
//                  oi
//                  explicação como a variavel vaiExecutar não é uma
//                  string vazio tem o valor true.
//                  &&
//                  e como a função é a ultima então ela é executada.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// console.log(0 || false || null || 'lucas' || true)
//                  lucas
//                  (basta um ser true para retornar true)
//                  como o texto lucas esta dentro de uma string e não está vazia 
//                  retorna ele pois é o 1° a ser encontrado
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const corUsuario = null
// const corPadrao = corUsuario || 'preto'
// console.log(corPadrao)
//                  preto
//                  retorna preto pois aqui o usuario não
//                  selecionou nenhuma cor
// ==============================================================
// const corUsuario = 'vermelho'
// const corPadrao = corUsuario || 'preto'
// console.log(corPadrao)
//                  vermelho
//                  retorna vermelho pois o usuario selecionou essa cor
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  CUIDADO COM ISSO
// const a = 0
// const b = null
// const c = false
// const d = 'false'
// const e = NaN

// console.log(a || b || c || d || e)
//                  false
//                  retorna false da letra d, pois é uma string
//                  com o texto false/
// ==============================================================
// const a = 0
// const b = null
// const c = false
// const d = false
// const e = NaN

// console.log(a || b || c || d || e)
//                  NaN
//                  retorna NaN pois se caso todos forem false vai
//                  retornar a ultima