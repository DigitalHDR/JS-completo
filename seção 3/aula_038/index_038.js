/**
 Operadores lógicos

 && = e     (todos expressões tevem ser true para retornar true)
 || = ou    (basta um ser true para retornar true)
 !  = não

 */
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  && = e
// console.log(true && true)
//                  true
//                  só retorna (true) se os dois forem (true)
// =============================================
// console.log(true && true && true && true && true && true )
//                  true
//                  só retorna (true) se todos forem (true)
// =============================================
// console.log(true && true && true && true && true && false )
//                  false
//                  como apenas um é false retornou false
// =============================================
//                  dentro de variaveis
// const expressao = true && true && true && true && true && true
// console.log(expressao)
//                  true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  || = ou
//                  basta um ser true para retornar true
// const expressaoOr = true || false
// console.log(expressaoOr)
// true
// =============================================
// const expressaoOr = true || true
// console.log(expressaoOr)
//                  true
// =============================================
// const expressaoOr = false || false
// console.log(expressaoOr)
//                  false
// =============================================
// const expressaoOr = false || false || false || true
// console.log(expressaoOr)
//                  true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  explicação de login o jeito (certo)
// const usuario = 'lucas'
// const senha = '12345'
// const vailogar = usuario === 'lucas' && senha === '12345'
// console.log(vailogar)
//                  true
// =============================================
// const usuario = 'lucas'
// const senha = '12345'
// const vailogar = usuario === 'lucas' && senha === '123456789'
// console.log(vailogar)
//                  false
// =============================================
//                  explicação de login o jeito (errado)
// const usuario = 'lucas'
// const senha = '12345'
// const vailogar = usuario === 'lucas' || senha === '123456789'
// console.log(vailogar)
//                  true
//                  perceba que retorna true pois o || basta um 
//                  ser true para retornar true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  !  = não
// console.log(!true)
//                  false
// =============================================
// console.log(!false)
//                  true
// =============================================
//                  !! isso também é aceito porem não 
//                  muito usado (não use com dois !!)
// console.log(!!true)
// true
//                  erá true, com 1 ! vira false,
//                  agora é false, com ! vira true novamente