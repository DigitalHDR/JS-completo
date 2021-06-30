//?         querySelector seleciona somente o 1° paragrafo
//?         querySelectorAll é bem parecido com arrays(parecido)
//todo =====================================================
// const paragrafos = document.querySelector('.paragrafo')
// const ps = paragrafos.querySelectorAll('p')

// for (let p of ps) {
//     console.log(p)
// }
//?         console chrome
//?         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
//?         <p>Quasi est quas porro modi provident sint repudiandae amet</p>
//?         <p>suscipit obcaecati laudantium corporis fugit non, facere molestiae,</p>
//?         <p>eum incidunt? Quas, unde autem.</p>
//todo =====================================================
// const paragrafos = document.querySelector('.paragrafo')
// const ps = paragrafos.querySelectorAll('p')

// const estiloBody = getComputedStyle(document.body)
// const backgroundColorBody = estiloBody.backgroundColor
// console.log(backgroundColorBody)

// for (let p of ps) {
//     console.log(p)
// }
//?         rgba(0, 0, 0, 0)
//?         getComputedStyle faz retornar os valores do arquivo de estilo css
//?         no caso vai ser pego os do body
//?         em uma outra variavel pegue somente o que vc quer que seja retornado
//?         no caso 
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | getComputedStyle | para acessar e pegar os styles do documento
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = '#fff'
}

