// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%% prompt de texto para receber numero %%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// LEMBRANDO QUE O PROMPT NÃO VAI FUNCIONAR DIRETEMENTE NO TERMINAR DO VC CODE
// POIS NÃO TEM COMO FAZER UMA CAIXA DE PERGUNTA APARECER

let num1 = prompt('Digite um número')
let num2 = prompt('Digite outro número')

num1 = Number(num1)
num2 = Number(num2)

const soma = num1 + num2
alert(`A soma de ${num1} + ${num2} é: ${soma}`)