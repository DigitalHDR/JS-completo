// function meuEscopo() {
//     const form = document.querySelector('.form')

//     form.onsubmit = function (evento) {
//         evento.preventDefault()
//         alert(1)
//         console.log('Foi enviado')
//     };
// }
// meuEscopo()
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function meuEscopo() {
//     const form = document.querySelector('.form')

//     function recebeEventoForm(evento) {
//         evento.preventDefault()
//         console.log('o form não foi enviado')
//     }

//     form.addEventListener('submit', recebeEventoForm)
// }
// meuEscopo()
// // (no google chrome)
// // o form não foi enviado
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas)

        resultado.innerHTML += `<p>
        ${nome.value} 
        ${sobrenome.value}
        ${peso.value}
        ${altura.value} </p>`
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()

