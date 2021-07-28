// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//     }

//     aumentarVolume() {
//         this.volume += 2
//     }

//     diminuirVolume() {
//         this.volume -= 2
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
// console.log(controle1)
//?         ConstroleRemoto { tv: 'LG', volume: 0 }
//todo =====================================================
// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//     }

//     aumentarVolume() {
//         this.volume += 2
//     }

//     diminuirVolume() {
//         this.volume -= 2
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// console.log(controle1)
//?         ConstroleRemoto { tv: 'LG', volume: 6 }
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | static |
//*             metodos estáticos
//! somente pode ser acessado pela class
//* todos os metodos podem receber parametros adicionais
//* o metodo estatico já colocar o this automaticament
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//     }

//?    METODO DE INSTÂNCIA
//     aumentarVolume() {
//         this.volume += 2
//     }

//?    METODO DE INSTÂNCIA
//     diminuirVolume() {
//         this.volume -= 2
//     }

//     //? METODO DE ESTÁTICO
//     static trocaPilha() {
//         console.log('Ok vou trocar')
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// console.log(controle1)

// ConstroleRemoto.trocaPilha()
//?         ConstroleRemoto { tv: 'LG', volume: 6 }
//?         Ok vou trocar
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | static |
//*             metodos estáticos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//     }

//     aumentarVolume() {
//         this.volume += 2
//     }

//     diminuirVolume() {
//         this.volume -= 2
//     }

//     //? METODO DE ESTÁTICO
//     static trocaPilha() {
//         console.log(this.volume) //? mudou aqui
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// console.log(controle1)

// ConstroleRemoto.trocaPilha()
//?         ConstroleRemoto { tv: 'LG', volume: 6 }
//?         undefined
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | static |
//*             metodos estáticos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//     }

//     aumentarVolume() {
//         this.volume += 2
//     }

//     diminuirVolume() {
//         this.volume -= 2
//     }

//     //? METODO DE ESTÁTICO
//     static soma(x, y) {
//         return x + y
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// controle1.aumentarVolume()
// console.log(controle1)

// console.log(ConstroleRemoto.soma(2, 4))
//?         ConstroleRemoto { tv: 'LG', volume: 8 }
//?         6
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   | pode-se chamar uma função dentro do construtor |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function teste() {
//     console.log('Este é meu teste')
// }

// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//         teste()
//     }

//     aumentarVolume() {
//         this.volume += 2
//     }

//     diminuirVolume() {
//         this.volume -= 2
//     }

//     //? METODO DE ESTÁTICO
//     static soma(x, y) {
//         return x + y
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
//?         Este é meu teste
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | o metodo estatico já colocar o this automaticament |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function teste() {
//     console.log('Este é meu teste')
// }

// class ConstroleRemoto {
//     constructor(tv) {
//         this.tv = tv
//         this.volume = 0
//         teste()
//     }

//     aumentarVolume() {
//         this.volume += 2
//     }

//     diminuirVolume() {
//         this.volume -= 2
//     }

//     //? METODO DE ESTÁTICO
//     static soma(x, y) {
//         console.log(this)
//     }
// }

// const controle1 = new ConstroleRemoto('LG')
// ConstroleRemoto.soma()
//?         Este é meu teste
//?         [class ConstroleRemoto]
//todo =====================================================
function teste() {
    console.log(this)
}

class ConstroleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        teste()
    }

    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    //? METODO DE ESTÁTICO
    static soma(x, y) {
        console.log(this)
    }
}

const controle1 = new ConstroleRemoto('LG')