//? Tuple, siginifica que é algo imutavel
// const dadosCliente1: readonly [number, string] = [1, 'Luiz']
// const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda']
// const dadosCliente3: [number, string, string?] = [1, 'Luiz']
// const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda']

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Carlos';

// console.log(dadosCliente1)
// console.log(dadosCliente2)
// console.log(dadosCliente3)
// console.log(dadosCliente4)

// readonly array
// const array1: readonly string[] = ['Luiz', 'Otávio']
// const array2: ReadonlyArray<string> = ['Luiz', 'Otávio']

// console.log(array1)
// console.log(array2)

// Module mode
// export default 1
//todo=========================================================================
//? Tuple, siginifica que é algo imutavel
// const dadosCliente1: [number, string] = [1, 'Lucas']

// dadosCliente1[0] = 20
// console.log(dadosCliente1)
//? [ 20, 'Lucas' ]
//? porem você pode mudar o seu valor desde que seja da mesma tipagem
//todo=========================================================================
// //? Tuple, siginifica que é algo imutavel
// const dadosCliente1: [number, string] = [1, 'Lucas']

// dadosCliente1[0] = 20
// dadosCliente1[1] = '20'
// console.log(dadosCliente1)
//? [ 20, '20' ]
//todo=========================================================================
//? Tuple, siginifica que é algo imutavel
// const dadosCliente1: [number, string] = [1, 'Lucas']
// const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Fernando']

// console.log(dadosCliente1)
// console.log(dadosCliente2)
//? [ 1, 'Lucas' ]
//? [ 1, 'Lucas', 'Fernando' ]
//todo=========================================================================
//? Tuple, siginifica que é algo imutavel
// const dadosCliente1: [number, string] = [1, 'Lucas']
// const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Fernando']
// const dadosCliente3: [number, string, string?] = [1, 'Lucas', 'Fernando']

// console.log(dadosCliente1)
// console.log(dadosCliente2)
// console.log(dadosCliente3)
//? [ 1, 'Lucas' ]
//? [ 1, 'Lucas', 'Fernando' ]
//? [ 1, 'Lucas', 'Fernando' ]
//! =========================================================================
// //? Tuple, siginifica que é algo imutavel
// const dadosCliente1: [number, string] = [1, 'Lucas']
// const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Fernando']
// const dadosCliente3: [number, string, string?] = [1, 'Lucas']

// console.log(dadosCliente1)
// console.log(dadosCliente2)
// console.log(dadosCliente3)
//? [ 1, 'Lucas' ]
//? [ 1, 'Lucas', 'Fernando' ]
//? [ 1, 'Lucas' ]
// com o string? usando ? faz ficar opcional
//todo===============================================================================
// //? Tuple, siginifica que é algo imutavel
// const dadosCliente1: [number, string] = [1, 'Lucas']
// const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Fernando']
// const dadosCliente3: [number, string, string?] = [1, 'Lucas']
// const dadosCliente4: [number, string, ...string[]] = [1, 'Lucas', 'fernando']

// console.log(dadosCliente1)
// console.log(dadosCliente2)
// console.log(dadosCliente3)
// console.log(dadosCliente4)
//? [ 1, 'Lucas' ]
//? [ 1, 'Lucas', 'Fernando' ]
//? [ 1, 'Lucas' ]
//? [ 1, 'Lucas', 'fernando' ]
//todo===============================================================================
//? Tuple, siginifica que é algo imutavel
const dadosCliente1: readonly [number, string] = [1, 'Lucas']
const dadosCliente2: [number, string, string] = [1, 'Lucas', 'Fernando']
const dadosCliente3: [number, string, string?] = [1, 'Lucas']
const dadosCliente4: [number, string, ...string[]] = [1, 'Lucas', 'fernando']

console.log(dadosCliente1)
console.log(dadosCliente2)
console.log(dadosCliente3)
console.log(dadosCliente4)
