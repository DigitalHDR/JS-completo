// Construtora => molde (classe)

// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
// }

// instância
// const pessoa1 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora
// const pessoa2 = new Pessoa('Pabline', 'Bressan') //? Pessoa = função construtora

// console.dir(pessoa1)
// console.dir(pessoa2)
//?         Pessoa {
//?             nome: 'Lucas',
//?             sobrenome: 'Fernando',
//?             nomeCompleto: [Function (anonymous)]
//?           }
//?           Pessoa {
//?             nome: 'Pabline',
//?             sobrenome: 'Bressan',
//?             nomeCompleto: [Function (anonymous)]
//?           }
//! JAVASCRIPT É BASEADO EM PROTOTIPOS PARA PASSAR PROPRIEDADES E METODOS DE
//! UM OBJETO PARA OUTRO

//! DEFINIÇÃO DE PROTÓTIPO
//! É O TERMO USADO PRA SE REFERIR AO QUE FOI CRIADO PELA 1° VEZ,
//! SERVINDO DE MODELO PARA FUTURAS PRODUÇÃOES

//! TODOS OS OBJETOS TEM UMA REFERÊNCIA INTERNA PARA UM PROTÓTIPO (_proto_)
//! QUE VEM DA PROPRIEDADE PROTOTIPES DA FUNÇÃO  CONSTRUTORA QUE FOI USADA
//! PARA CRIÁ-LO.
//! QUANDO TENTAMOS ACESSAR UM MEMBRO DE UM OBJETO, 1° O MOTOR DO JS VAI TENTAR
//! ENCONTRAR ESTE MEMBRO NO PRÓPRIO OBJETO E DEPOISS A CADEIA DE PROTOTIPOS É
//! USADA ATÉ O TOP (NULL) A´TE ENCONTRAR (OU NÃO) TAL MEMBRO
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | Prototypes |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
// }

// Pessoa.prototype.estouAqui = 'hahahaha'

// // instância
// const pessoa1 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora
// const pessoa2 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora

// console.dir(pessoa1)
//?         NO GOOGLE CHROME
//?         pessoa1.estouAqui
//?         "hahahaha"
//! ########################################################
//! perceba que com o prototype é possivel reultilizar a mesma propriedade
//! em outra pessoa, isso faz com que o seu prjeto sejá mais rapido
//! pois ira gastar menos memoria
//! o prototype foi altomaticamente lincado para ser usado em toda a função Pessoa
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
// }

// Pessoa.prototype.estouAqui = 'hahahaha'

//? instância
// const pessoa1 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora
// const pessoa2 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora

// console.dir(pessoa1)
//?         NO GOOGLE CHROME
//?         pessoa2.estouAqui
//?         "hahahaha"
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome
// }

// Pessoa.prototype.nomeCompleto = function() {
//     return this.nome + ' ' + this.sobrenome
// }

// //? instância
// const pessoa1 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora
// const pessoa2 = new Pessoa('Pabline', 'Bressan') //? Pessoa = função construtora

// console.dir(pessoa1)
// //?         NO GOOGLE CHROME
//?         pessoa1.nomeCompleto()
//?         "Original: Lucas Fernando"
//! ########################################################
// function Pessoa(nome, sobrenome) {
//     this.nome = nome
//     this.sobrenome = sobrenome
//     //? Mudou aqui , foi retirado
// }

// Pessoa.prototype.nomeCompleto = function() {
//     return this.nome + ' ' + this.sobrenome
// }

// //? instância
// const pessoa1 = new Pessoa('Lucas', 'Fernando') //? Pessoa = função construtora
// const pessoa2 = new Pessoa('Pabline', 'Bressan') //? Pessoa = função construtora

// console.dir(pessoa1)
//?         NO GOOGLE CHROME
//?         pessoa1.nomeCompleto()
//?         "Lucas Fernando"
//!         Perceba que como não tem mais a função nome completo no objeto
//!         original ele passa a usar o outro que foi criado

//?         o motor jo javaScript procura dessa forma

//?         pesssoa1, se não encontrar pula pro proximo
//?         Pessoa.prototype, se não encontrar pula pro proximo
//?         Object.prototype.
//todo =====================================================
