//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     Conta bancaria com fução construtora |
//! ########################################################
//! foi arrumado a logica mais abaixo, no proximo titulo
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (this.saldo < valor) {
//         this.verSaldo()
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }

// const conta1 = new Conta(11, 22, 10)
// console.log(conta1)
//?         Conta { agencia: 11, conta: 22, saldo: 10 }
//todo =====================================================
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (this.saldo < valor) {
//         this.verSaldo()
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
//?         Ag/c: 11/22 | Saldo: R$21.00
//todo =====================================================
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (this.saldo < valor) {
//         this.verSaldo()
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
// conta1.depositar(10)
//?         Ag/c: 11/22 | Saldo: R$21.00
//?         Ag/c: 11/22 | Saldo: R$31.00
//todo =====================================================
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (this.saldo < valor) {
//         this.verSaldo()
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(30)
//?         Ag/c: 11/22 | Saldo: R$21.00
//?         Ag/c: 11/22 | Saldo: R$31.00
//?         Ag/c: 11/22 | Saldo: R$1.00
//todo =====================================================
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (this.saldo < valor) {
//         this.verSaldo()
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(31)
//?         Ag/c: 11/22 | Saldo: R$21.00
//?         Ag/c: 11/22 | Saldo: R$31.00
//?         Ag/c: 11/22 | Saldo: R$0.00
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*           | arrumando a logica em .sacar |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(31)
// conta1.sacar(0.01)
//?         Ag/c: 11/22 | Saldo: R$21.00
//?         Ag/c: 11/22 | Saldo: R$31.00
//?         Ag/c: 11/22 | Saldo: R$0.00
//?         Saldo insuficiente: 0
//todo =====================================================
// function Conta(agencia, conta , saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {  
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }
// const conta1 = new Conta(11, 22, 10)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(30)
// conta1.sacar(0.01)
//?         Ag/c: 11/22 | Saldo: R$21.00
//?         Ag/c: 11/22 | Saldo: R$31.00
//?         Ag/c: 11/22 | Saldo: R$1.00
//?         Ag/c: 11/22 | Saldo: R$0.99
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | add conta corrente |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }

// function ContaCorrente(agencia, conta, saldo, limite) {
//     Conta.call(this, agencia, conta, saldo)
//     this.limite = limite
// }
// ContaCorrente.prototype = Object.create(Conta.prototype)
// ContaCorrente.prototype.constructor = ContaCorrente


// ContaCorrente.sacar = function (valor) {
//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// const contaCorrente = new ContaCorrente(11, 22, 0, 100)
// contaCorrente.depositar(10)
//?         Ag/c: 11/22 | Saldo: R$10.00
//?         na conta corrente
//todo =====================================================
// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }

// function ContaCorrente(agencia, conta, saldo, limite) {
//     Conta.call(this, agencia, conta, saldo)
//     this.limite = limite
// }

// ContaCorrente.prototype = Object.create(Conta.prototype)
// ContaCorrente.prototype.constructor = ContaCorrente


// ContaCorrente.prototype.sacar = function (valor) {
//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// const contaCorrente = new ContaCorrente(11, 22, 0, 100)
// contaCorrente.depositar(10)
// contaCorrente.sacar(90)
//?         Ag/c: 11/22 | Saldo: R$10.00
//?         Ag/c: 11/22 | Saldo: R$-80.00
//todo =====================================================
// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }

// function ContaCorrente(agencia, conta, saldo, limite) {
//     Conta.call(this, agencia, conta, saldo)
//     this.limite = limite
// }

// ContaCorrente.prototype = Object.create(Conta.prototype)
// ContaCorrente.prototype.constructor = ContaCorrente


// ContaCorrente.prototype.sacar = function (valor) {
//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// const contaCorrente = new ContaCorrente(11, 22, 0, 100)
// contaCorrente.depositar(10)
// contaCorrente.sacar(110)
//?         Ag/c: 11/22 | Saldo: R$10.00
//?         Ag/c: 11/22 | Saldo: R$-100.00
//todo =====================================================
// function Conta(agencia, conta, saldo) {
//     this.agencia = agencia
//     this.conta = conta
//     this.saldo = saldo
// }

// Conta.prototype.sacar = function (valor) {
//     if (valor > this.saldo) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// Conta.prototype.depositar = function (valor) {
//     this.saldo += valor
//     this.verSaldo()
// }

// Conta.prototype.verSaldo = function () {
//     console.log(
//         `Ag/c: ${this.agencia}/${this.conta} | ` +
//         `Saldo: R$${this.saldo.toFixed(2)}`
//     )
// }

// function ContaCorrente(agencia, conta, saldo, limite) {
//     Conta.call(this, agencia, conta, saldo)
//     this.limite = limite
// }

// ContaCorrente.prototype = Object.create(Conta.prototype)
// ContaCorrente.prototype.constructor = ContaCorrente


// ContaCorrente.prototype.sacar = function (valor) {
//     if (valor > (this.saldo + this.limite)) {
//         console.log(`Saldo insuficiente: ${this.saldo}`)
//         return
//     }

//     this.saldo -= valor
//     this.verSaldo()
// }

// const contaCorrente = new ContaCorrente(11, 22, 0, 100)
// contaCorrente.depositar(10)
// contaCorrente.sacar(110)
// contaCorrente.sacar(1)
//?         Ag/c: 11/22 | Saldo: R$10.00
//?         Ag/c: 11/22 | Saldo: R$-100.00
//?         Saldo insuficiente: -100

//?         agora vc não pode sacar mais nenhum real
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | add conta poupança |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
  
  Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
  };
  
  Conta.prototype.verSaldo = function() {
    console.log(
      `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
    );
  };
  
  function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
  }
  CC.prototype = Object.create(Conta.prototype);
  CC.prototype.constructor = CC;
  
  CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
  }
  CP.prototype = Object.create(Conta.prototype);
  CP.prototype.constructor = CP;
  
  const cc = new CC(11, 22, 0, 100);
  cc.depositar(10);
  cc.sacar(110);
  cc.sacar(1);
  
  console.log();
  
  const cp = new CP(12, 33, 0);
  cp.depositar(10);
  cp.sacar(10);
  cp.sacar(1);
//?         Ag/c: 11/22 | Saldo: R$10.00
//?         Ag/c: 11/22 | Saldo: R$-100.00
//?         Saldo insuficiente: -100

//?         Ag/c: 12/33 | Saldo: R$10.00
//?         Ag/c: 12/33 | Saldo: R$0.00
//?         Saldo insuficiente: 0
//todo =====================================================
  