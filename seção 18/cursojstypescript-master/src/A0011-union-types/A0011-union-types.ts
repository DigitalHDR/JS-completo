// function addOrConcat(
//   a: number | string | boolean,
//   b: number | string | boolean,
// ): number | string {
//   if (typeof a === 'number' && typeof b === 'number') return a + b;
//   return `${a}${b}`;
// }

// console.log(addOrConcat(10, 20));
// console.log(addOrConcat('10', '20'));
// console.log(addOrConcat(10, '20'));
// console.log(addOrConcat('10', 20));
// console.log(addOrConcat(true, true));

//todo =====================================================

// function add(a: number, b: number): number {
//   return a + b
// }

// console.log(add(10, 20))
//?     30
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function addOrConcat(a: number | string, b: number | string) {
//   if (typeof a === 'number' && typeof b === 'number') return a + b
//   if (typeof a === 'string' && typeof b === 'string') return a + b
// }

// console.log(addOrConcat(10, 20))
// console.log(addOrConcat('10', '20'))
//?     30
//?     1020
//todo =====================================================
// function addOrConcat(a: number | string, b: number | string) {
//   if (typeof a === 'number' && typeof b === 'number') return a + b
//   return `${a}${b}`
// }

// console.log(addOrConcat(10, 20))
// console.log(addOrConcat('10', '20'))
//?     30
//?     1020
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*       | expecificando a fuçao number | string |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// function addOrConcat(a: number | string, b: number | string): number | string {
//   if (typeof a === 'number' && typeof b === 'number') return a + b
//   return `${a}${b}`
// }

// console.log(addOrConcat(10, 20))
// console.log(addOrConcat('10', '20'))
//?     30
//?     1020
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return `${a}${b}`
}

console.log(addOrConcat(10, 20))
console.log(addOrConcat('10', '20'))
console.log(addOrConcat(10, '20'))
//?     30
//?     1020
//?     1020
//todo =====================================================
