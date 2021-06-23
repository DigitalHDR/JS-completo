//          && = e     (todos tevem ser true para retornar true)
//          || = ou    (basta um ser true para retornar true)
//          !  = não   (nega alguma coisa)
// ========================================================
//          entre 0 até 11 - Bom dia
//          entre 12 até 17 - Boa tarde
//          entre 18 até 23 - Boa noite
// ========================================================
//          (((if - pode ser usado sozinho)))

//          (((else if - precisa de (if) para funcionar)))

//          (((else - pode ser apenas 1, e precisa do (if) pra funcionar
//          caso a resposta não esteja em if ou em else if cai aqui.)))
// ========================================================
//          if
// const hora = 10

// if (hora < 12) {
//     console.log('Bom dia')
// }
//          Bom dia
// ========================================================
//                  if e else
// const hora = 13

// if (hora < 12) {
//     console.log('Bom dia')
// } else {
//     console.log('Boa tarde')
// }
//          Boa tarde
// ========================================================
// const hora = 13

// if (hora >= 0 && hora <= 11) {
//     console.log('bom dia')
// } else if (hora >= 12 && hora <= 17) {
//     console.log('boa tarde')
// }
//          boa tarde
// ========================================================
// const hora = 23

// if (hora >= 0 && hora <= 11) {
//     console.log('bom dia')
// } else if (hora >= 12 && hora <= 17) {
//     console.log('boa tarde')
// } else if (hora >= 18 && hora <= 23) {
//     console.log('boa noite')
// }
//          boa noite
// ========================================================
// const hora = 50

// if (hora >= 0 && hora <= 11) {
//     console.log('bom dia')
// } else if (hora >= 12 && hora <= 17) {
//     console.log('boa tarde')
// } else if (hora >= 18 && hora <= 23) {
//     console.log('boa noite')
// } else {
//     console.log('Olá')
// }
//          Olá
// ========================================================
// const tenhoGrana = NaN
// if (tenhoGrana) {
//     console.log('vou sair de casa')
// }
//          retorna vazio
// ========================================================
// const tenhoGrana = 'lucas'
// if (tenhoGrana) {
//     console.log('vou sair de casa')
// }
//          vou sair de casa
// ========================================================