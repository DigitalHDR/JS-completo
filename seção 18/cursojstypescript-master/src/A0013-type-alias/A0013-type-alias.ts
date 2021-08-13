//? type alias, cria uma tipo de apelido, os types sempre iniciado com letra maiuscula

// type Idade = number;
// type Pessoa = {
//   nome: string;
//   idade: Idade;
//   salario: number;
//   corPreferida?: string;
// };
// type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; // OR
// type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
// type CorPreferida = CorRGB | CorCMYK;

// const pessoa: Pessoa = {
//   idade: 30,
//   nome: 'Luiz',
//   salario: 200_000,
// };

// export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
//   return { ...pessoa, corPreferida: cor };
// }

// console.log(setCorPreferida(pessoa, 'Azul'));
// console.log(pessoa);
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | //? type alias, cria uma tipo de apelido, os types sempre iniciado com letra maiuscula |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// type Idade = number
// type Pessoa = {
//   nome: string
//   idade: Idade //? perceba que Idade é o mesmo criado em type Idade seu valor é number
//   salario: number
//   corPreferia?: string
// }

// type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
// type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
// type CorPreferida = CorRGB | CorCMYK
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// type Idade = number
// type Pessoa = {
//   nome: string
//   idade: Idade //? perceba que Idade é o mesmo criado em type Idade seu valor é number
//   salario: number
//   corPreferida?: string
// }

// type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
// type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
// type CorPreferida = CorRGB | CorCMYK

// const pessoa: Pessoa = {
//   nome: 'Lucas',
//   idade: 32,
//   salario: 10_000,
//   corPreferida: 'Azul',
// }

// export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
//   return { ...pessoa, corPreferida: cor }
// }

// console.log(setCorPreferida(pessoa, 'Azul'))
//?     { nome: 'Lucas', idade: 32, salario: 10000, corPreferida: 'Azul' }
//todo =====================================================

type Idade = number
type Pessoa = {
  nome: string
  idade: Idade //? perceba que Idade é o mesmo criado em type Idade seu valor é number
  salario: number
  corPreferida?: string
}

type CorRGB = 'Vermelho' | 'Verde' | 'Azul'
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'
type CorPreferida = CorRGB | CorCMYK

const pessoa: Pessoa = {
  nome: 'Lucas',
  idade: 32,
  salario: 10_000,
  corPreferida: 'Azul',
}

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor }
}

console.log(setCorPreferida(pessoa, 'Ciano'))
console.log(pessoa)
