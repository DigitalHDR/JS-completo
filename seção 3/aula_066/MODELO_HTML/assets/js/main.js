//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*           | criar uma hora zerada de (1970) |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

//todo =====================================================
const relogio = document.querySelector('.relogio')

const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
//todo =====================================================
let segundos = 0
let timer
//todo =====================================================
function iniciaRelogio() {
    timer = setInterval(() => {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000);
}
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*    | mesma função que a de baixo porem melhor |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener('click', function (e) {
    const elemento = e.target

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }

    if (elemento.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.classList.add('pausado')
    }

    if (elemento.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00'
        segundos = 0
    }
})
//! ########################################################
// iniciar.addEventListener('click', function (event) {
//     relogio.classList.remove('pausado')
//     clearInterval(timer)
//     iniciaRelogio()
// })

// pausar.addEventListener('click', function (event) {
//     clearInterval(timer)
//     relogio.classList.add('pausado')
// })

// zerar.addEventListener('click', function (event) {
//     clearInterval(timer)
//     relogio.classList.remove('pausado')
//     relogio.innerHTML = '00:00:00'
//     segundos = 0
// })
//todo =====================================================