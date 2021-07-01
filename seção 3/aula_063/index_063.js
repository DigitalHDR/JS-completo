
// console.log(naoExisto)
//?         ReferenceError: naoExisto is not defined
//todo =====================================================
// try {
//     console.log(naoExisto)
// } catch(error) {
//     console.log('naoExisto não existe')
// }
//?         naoExisto não existe
//todo =====================================================
// try {
//     console.log(naoExisto)
// } catch(error) {
//     console.log('naoExisto não existe')
//     console.log(error)
// }
//?         naoExisto não existe
//?         ReferenceError: naoExisto is not defined
//todo =====================================================
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw ('x e y precisam ser números.')
//     }

//     return x + y
// }
// console.log(soma(1, 2))
// console.log(soma('1', 2))
//?         9
//?         Error: :23
//?         throw ('x e y precisam ser números.')
//?         x e y precisam ser números.
//todo =====================================================
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw ('x e y precisam ser números.')
//     }

//     return x + y
// }

// try {
//     console.log(soma(1, 2))
//     console.log(soma('1', 2))
// } catch(error) {
//     console.log(error)
// }
//?         3
//?         x e y precisam ser números.
//todo =====================================================
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error ('x e y precisam ser números.')
//     }

//     return x + y
// }

// try {
//     console.log(soma(1, 2))
//     console.log(soma('1', 2))
// } catch(error) {
//     console.log(error)
// }
//?         3
//?         Error: x e y precisam ser números.
//todo =====================================================
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new ReferenceError ('x e y precisam ser números.')
//     }

//     return x + y
// }

// try {
//     console.log(soma(1, 2))
//     console.log(soma('1', 2))
// } catch(error) {
//     console.log(error)
// }
//?         3
//?         ReferenceError: x e y precisam ser números.
//todo =====================================================
// function soma(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new ReferenceError ('x e y precisam ser números.')
//     }

//     return x + y
// }

// try {
//     console.log(soma(1, 2))
//     console.log(soma('1', 2))
// } catch(error) {
//     console.log('Alguma coisa amigável para o usuário')
// }
//?         3
//?         Alguma coisa amigável para o usuário
//todo =====================================================