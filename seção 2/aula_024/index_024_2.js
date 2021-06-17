// ================================================
// forma nova desse fazer
// perceba que tem uma variavel abc ela
// ela serve para não dar erro porque o array
// deve ser armazenada em algum lugar
// let varA = 'A' //  b
// let varB = 'B' //  c
// let varC = 'C' //  a

// let abc = [varA, varB, varC] = [varB, varC, varA]
// console.log(varA, varB, varC)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// essa é a mesma forma porem sem a variavel abc
// para não dar erro coloque ponto e virguça na ultima variavel
// no caso varC
// para não dar erro quando for para o array

let varA = 'A'  // b
let varB = 'B'  // c
let varC = 'C'; // a    perceba que tem ponto e virgula na ultima


[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC)