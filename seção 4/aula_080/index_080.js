//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | função geradora |
//* se for usado return o código para na quele lugar(igual o padrao dele)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1)
//?         Object [Generator] {}
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1.next())
//?         { value: 'Valor 1', done: false }

//?         done: false, significa que ainda tem mais valores,
//?         que ainda não acabou
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1.next().value)
//?         Valor 1
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1.next().value)
// console.log(g1.next().value)
//?         Valor 1
//?         Valor 2
///?        é como se fizesse uma pausa na execução
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
///?        Valor 1
///?        Valor 2
///?        Valor 3
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
///?        Valor 1
///?        Valor 2
///?        Valor 3
///?        undefined
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())
//?         Valor 1
//?         Valor 2
//?         { value: 'Valor 3', done: false }

//?         { value: undefined, done: true }
//?         done: true, pois agora não tem mais valores.
//todo =====================================================
// function* geradora1() {
//     //? qualquer código ...
//     yield 'Valor 1'
//     //? qualquer código ...
//     yield 'Valor 2'
//     //? qualquer código ...
//     yield 'Valor 3'
// }

// const g1 = geradora1()
// for (let valor of g1) {
//     console.log(valor)
// }
//?         Valor 1
//?         Valor 2
//?         Valor 3
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | gerador infinito |
//*              para toda vez que for chamado
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function* geradora2() {
//     let i = 0

//     while (true) {
//         yield i
//         i++
//     }
// }

// const g2 = geradora2()
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
//?         0
//?         1
//?         2
//?         3
//?         4
//?         5
//?         toda vez que o gerador for chamado mais gerar
//?         um novo valor
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | uma função geradora chamando outra |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function* geradora3() {
//     yield 0
//     yield 1
//     yield 2
// }

// function* geradora4() {
//     yield* geradora3()
//     yield 3
//     yield 4
//     yield 5
// }

// const g4 = geradora4()
// for (let valor of g4) {
//     console.log(valor)
// }
//?         0
//?         1
//?         2
//?         3
//?         4
//?         5
//todo =====================================================
// function* geradora5() {
//     yield function () {
//         console.log('Vim do y1')
//     }

//     //...poderia ter outro códigos aqui

//     yield function () {
//         console.log('Vim do y2')
//     }
// }

// const g5 = geradora5()
// const func1 = g5.next().value
// const func2 = g5.next().value

// func1()
// func2()
//?         Vim do y1
//?         Vim do y2
//todo =====================================================
function* geradora5() {
    yield function () {
        console.log('Vim do y1')
    }

    //...poderia ter outro códigos aqui

    yield function () {
        console.log('Vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value

func1()
func2()