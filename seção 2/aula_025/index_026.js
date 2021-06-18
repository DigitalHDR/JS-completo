// o cara falou que nunca usou em um projeto na vida dele/
// document.write('Um texto alguma coisa')

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// um spoprepõe o outro se usar somente =
// document.body.innerHTML = 'alguma coisa'
// alguma coisa

// document.body.innerHTML = 'escrever'
// escrever
// ==============================================================
// document.body.innerHTML += 'escrever'
// escreverescrever


const nome = prompt('Digite seu nome completo:');

// ${nome[1]} ou ${nome.charAt(1)}

//          lucas Fernando

document.body.innerHTML += `Seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;
document.body.innerHTML += `Qual o primeiro índice da LETRA no seu nome? ${nome.indexOf('lucas')} <br />`;
document.body.innerHTML += `Qual o último índice da LETRA no seu nome? ${nome.lastIndexOf('s')} <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split()} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br />`;