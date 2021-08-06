//?         1
// import { nome } from './modulo1'

// console.log(nome)
//?         assim somente nome foi exportado
//?         Lucas
//todo =====================================================
// //?         2
// import { nome, sobrenome, idade, soma } from './modulo1'

// console.log(nome, sobrenome, idade)
// console.log(soma(5, 5))
//?         Lucas Fernando 30
//?         10
//?         assim tudo até a função
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | redeclarado um variavel do import |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //?         3
// import { nome as nome2, sobrenome, idade, soma } from './modulo1';

// const nome = 'Ana'

// console.log(nome, sobrenome, idade)
// console.log(soma(5, 5))
//?         Ana Fernando 30
//?         10
//todo =====================================================
// //?         4
// import { nome as nome2, sobrenome, idade, soma } from './modulo1';

// const nome = 'Ana'

// console.log(nome, nome2, sobrenome, idade)
// console.log(soma(5, 5))
//?         Ana Lucas Fernando 30
//?         10
//todo =====================================================
// //?         5
// import { nome , sobrenome, idade, soma, Pessoa } from './modulo1';

// const p1 = new Pessoa('Lucas', 'Fernando')
// console.log(p1)
//?         e {nome: "Lucas", sobrenome: "Fernando"}
//?         (e = export)
//?         aqui no caso está usando somente Pessoa
//?         também pode ser renomeando (Pessoa as outroCoisa)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | IMPORT TUDO E UMA UNICA VARIÁVEL |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //?         6
// import * as MeuModulo from './modulo1';

// console.log(MeuModulo)
//?         idade: (...)
//?         nome: (...)
//?         sobrenome: (...)
//?         soma: (...)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | default |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// //?         7
// import qualquerNome from './modulo1';

// console.log(qualquerNome(5, 5))
//?         10
//?         fora de chaves
//?         o algo como se fosse o padrão que não tem export na frente
//?         no module1 um somente a função some está com default então só 
//?         virá ela
//todo =====================================================
// //?         8
// import soma from './modulo1';
// console.log(soma)
//?         Lucas
//todo =====================================================
// //?         9
// import soma from './modulo1';
// console.log(soma(2, 2))
//?         4
//todo =====================================================
// //?         10
// import soma from './modulo1';
// console.log(soma(2, 2))
//?         4
//?         sempre que estiver importando sem chave vai ser o default
//todo =====================================================
// //?         11
// import multiplica, { nome, sobrenome, idade, soma } from './modulo1';
// console.log(multiplica(5, 40))
// console.log(nome, sobrenome, idade, soma(4, 4))
//?         200
//?         Lucas Fernando 30 8
//todo =====================================================
//?         12
// import { nome, sobrenome, idade } from './modulo1';

// console.log(nome, sobrenome, idade )
//?         ana beatriz 25