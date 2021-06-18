// sempre que for nuúmero que está trabalando lembre-se
// de converter para número, pois o prompt só retorna string
// 1° maneira de converter com mais codigo
// ---------------------------------------------------------------
// let numero = prompt('Digite um número')
// numero = Number(numero)
// ---------------------------------------------------------------
// 2° maneira com menos codigo.
let numero = Number(prompt('Digite um número'))
// ===================================================

const numeroTitulo = document.getElementById('numero_titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero
// isso já faz aparecer o número que vc digitar no html

texto.innerHTML = ''
texto.innerHTML = `<p>Raiz quadrada: ${numero ** 0.5}</p>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>é NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  getElementById (method)
// Retorna uma referência ao primeiro objeto com o valor
// especificado do atributo ID.
// ===================================================
// deve-se ter somente um elemento ID por pagina com o mesmo nome