// type TemNome = { nome: string };
// type TemSobrenome = { sobrenome: string };
// type TemIdade = { idade: number };
// type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

// type AB = 'A' | 'B';
// type AC = 'A' | 'C';
// type AD = 'D' | 'A';
// type Intersecao = AB & AC & AD;

// const pessoa: Pessoa = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 30,
// };

// console.log(pessoa);

// // Module mode
// export { pessoa };
//todo =====================================================
// & é igual a and

// type TemNome = { nome: string }
// type TemSobrenome = { sobrenome: string }
// type TemIdade = { idade: number }
// type Pessoa = TemNome & TemSobrenome & TemIdade

// const pessoa: Pessoa = {
//   nome: 'Lucas',
//   sobrenome: 'Fernando',
//   idade: 32,
// }

// console.log(pessoa)
//?     { nome: 'Lucas', sobrenome: 'Fernando', idade: 32 }
//todo =====================================================
type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type AD = 'D' | 'A'
type intersecao = AB & AC & AD

const pessoa: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Fernando',
  idade: 32,
}

console.log(pessoa)
