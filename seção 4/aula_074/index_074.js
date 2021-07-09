// (function () {
//     console.log('12345')
// })()
//?         12345
//todo =====================================================
// (function () {
//     const nome = 'Lucas'
//     console.log(nome)
// })()
//?         Lucas
//todo =====================================================
// (function () {
//     const sobrenome = 'Fernando'
//     function criaNome(nome) {
//         return nome + ' ' + sobrenome
//     }

//     function falaNome() {
//         console.log(criaNome('Lucas'))
//     }

//     falaNome()

// })()

// const nome = 'Qualquer coisa'
//?         Lucas Fernando
//todo =====================================================
// (function (idade, peso, altura) {
//     const sobrenome = 'Fernando'
//     function criaNome(nome) {
//         return nome + ' ' + sobrenome
//     }

//     function falaNome() {
//         console.log(criaNome('Lucas'))
//     }

//     falaNome()
//     console.log(idade, peso, altura)

// })(32, 70, 1.70)

// const nome = 'Qualquer coisa'
//?         Lucas Fernando
//?         32 70 1.7
//todo =====================================================
(function (idade, peso, altura) {
    const sobrenome = 'Fernando'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Lucas'))
    }

    falaNome()
    console.log(idade, peso, altura)

})(32, 70, 1.70)

const nome = 'Qualquer coisa'