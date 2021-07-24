// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// const d1 = new DispositivolEtronico('Smartphone')
// console.log(d1)
//?         DispositivolEtronico { nome: 'Smartphone', ligado: false }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | ligando o dispositivo |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// const d1 = new DispositivolEtronico('Smartphone')
// d1.ligar()
// console.log(d1)
//?         DispositivolEtronico { nome: 'Smartphone', ligado: true }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | ligando o dispositivo novamente |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// const d1 = new DispositivolEtronico('Smartphone')
// d1.ligar()
// d1.ligar()
// console.log(d1)
//?         SmartphoneDiposivito já ligado
//?         DispositivolEtronico { nome: 'Smartphone', ligado: true }
//todo =====================================================
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// const d1 = new DispositivolEtronico('Smartphone')
// d1.ligar()
// d1.ligar()
// d1.desligar()
// console.log(d1)
//?         SmartphoneDiposivito já ligado
//?         DispositivolEtronico { nome: 'Smartphone', ligado: false }
//?         perceba ligado: false
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*        | criando um novo dispositivo |
//* que tera todas propriedade de outra class
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {}

// const smartphone1 = new Smartphone('iPhone')
// console.log(smartphone1)
//?         Smartphone { nome: 'iPhone', ligado: false }
//todo =====================================================
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {}

// const smartphone1 = new Smartphone('iPhone')
// smartphone1.ligar()
// console.log(smartphone1)
//?         Smartphone { nome: 'iPhone', ligado: true }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*           | constructor() + super() |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {
//     constructor(nome, cor, modelo) {
//         super(nome)

//         this.cor = cor
//         this.modelo = modelo
//     }
// }

// const smartphone1 = new Smartphone('iPhone')
// console.log(smartphone1)

//?         super(), é chamar o constructor da classe pai e executar ele dentro
//?         de onde está sendo chamado, pra que ele execute todo o código
//?         que havia pedido anteriormente

//?         Smartphone {
//?          nome: 'iPhone',
//?           ligado: false,
//?           cor: undefined,
//?           modelo: undefined
//?         }
//todo =====================================================
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {
//     constructor(nome, cor, modelo) {
//         super(nome)

//         this.cor = cor
//         this.modelo = modelo
//     }
// }

// //? essa classe também terá todas propriedade de DispositivolEtronico, não de Smartphone
// class Tablet extends DispositivolEtronico {
//     constructor(nome, temWifi) {
//         super(nome)
//         this.temWifi = temWifi
//     }

//     ligar() {
//         console.log('Olha, você alterou o método ligar')
//     }
// }

// // const smartphone1 = new Smartphone('iPhone')
// // console.log(smartphone1)

// const tablet1 = new Tablet('iPad', true)
// console.log(tablet1)
//?         Tablet { nome: 'iPad', ligado: false, temWifi: true }
//todo =====================================================
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //! >>>>>>>>>>>>>>>>>>>>>>>>>>
// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {
//     constructor(nome, cor, modelo) {
//         super(nome)

//         this.cor = cor
//         this.modelo = modelo
//     }
// }

// //! >>>>>>>>>>>>>>>>>>>>>>>>>>
// //? essa classe também terá todas propriedade de DispositivolEtronico, não de Smartphone
// class Tablet extends DispositivolEtronico {
//     constructor(nome, temWifi) {
//         super(nome)
//         this.temWifi = temWifi
//     }

//     ligar() {
//         console.log('Olha, você alterou o método ligar')
//     }
// }

// const tablet1 = new Tablet('iPad', true)
// console.log(tablet1.ligado)
// //?         false
//todo =====================================================
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //! >>>>>>>>>>>>>>>>>>>>>>>>>>
// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {
//     constructor(nome, cor, modelo) {
//         super(nome)

//         this.cor = cor
//         this.modelo = modelo
//     }
// }

// //! >>>>>>>>>>>>>>>>>>>>>>>>>>
// //? essa classe também terá todas propriedade de DispositivolEtronico, não de Smartphone
// class Tablet extends DispositivolEtronico {
//     constructor(nome, temWifi) {
//         super(nome)
//         this.temWifi = temWifi
//     }

//     ligar() {
//         console.log('Olha, você alterou o método ligar')
//     }
// }

// const tablet1 = new Tablet('iPad', true)
// console.log(tablet1.ligado)
//?         false
//todo =====================================================
// class DispositivolEtronico {
//     constructor(nome) {
//         this.nome = nome
//         this.ligado = false
//     }

//     ligar() {
//         if (this.ligado) {
//             console.log(this.nome + 'Diposivito já ligado')
//             return
//         }

//         this.ligado = true
//     }

//     desligar() {
//         if (!this.ligado) {
//             console.log(this.nome + 'Diposivito já desligado')
//             return
//         }

//         this.ligado = false
//     }
// }

// //! >>>>>>>>>>>>>>>>>>>>>>>>>>
// //? Criando esse class ela terá todas propriedade de DispositivolEtronico
// class Smartphone extends DispositivolEtronico {
//     constructor(nome, cor, modelo) {
//         super(nome)

//         this.cor = cor
//         this.modelo = modelo
//     }
// }

// //! >>>>>>>>>>>>>>>>>>>>>>>>>>
// //? essa classe também terá todas propriedade de DispositivolEtronico, não de Smartphone
// class Tablet extends DispositivolEtronico {
//     constructor(nome, temWifi) {
//         super(nome)
//         this.temWifi = temWifi
//     }

//     ligar() {
//         console.log('Olha, você alterou o método ligar')
//     }

//     falaOi() {
//         console.log('Oi')
//     }
// }

// const tablet1 = new Tablet('iPad', true)
// tablet1.falaOi()
// console.log(tablet1.ligado)
//?         Oi
//?         false
//?        o metodo falaOi está somente dentro de Tablet
//todo =====================================================
