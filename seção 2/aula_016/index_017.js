//?          exercicios fazer aparecer isso no console
//?          lucas fernando tem: 32 anos de idade, pesa: 70 kilo
//?          tem 1.7 de altura e seu IMC é de: 20.982734
//?          lucas fernando nasceu em 1988
// ====================================================================
const nome = 'lucas fernando'
const idade = 32
const peso = 70
const altura = 1.70
const indeceDeMassaCorporal = peso / (altura * altura)
const anoDeNascimento = 2021 - idade

// ====================================================================
// 1° maneira de fazer e a melhor que tem facil ler e muito mais moderna
console.log(`${nome} tem: ${idade}, anos de idade, pesa: ${peso} kilo`)
console.log(`tem ${altura} de altura e seu IMC é de: ${indeceDeMassaCorporal}`)
console.log(`${nome} nasceu em: ${anoDeNascimento-1}.`)
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
//?          perceba que em ${anoDeNascimento-1}
//?          tem -1 pois assim fica na data de nascimente certo ainda não sei o porque
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// ====================================================================
// 2° maneira de fazer
// console.log(nome, 'tem:' ,idade, 'anos de idade, pesa:' ,peso, 'kilo')
// console.log('tem' ,altura, 'de altura e seu IMC é de:' ,indeceDeMassaCorporal,)
// console.log(nome, 'nasceu em:' ,anoDeNascimento, '.')
// ====================================================================
// 3° maneira de fazer
// console.log(nome + ' ' + 'tem:' + idade + ' ' + 'anos de idade, pesa:' + peso + ' ' + 'kilo')
// console.log('tem:' + altura + ' ' + 'de altura e seu IMC é de:' + indeceDeMassaCorporal)
// console.log(nome + ' ' + 'nasceu em:' + anoDeNascimento + '.')
//?          aqui para não ter espaço entre o ponto final e o ano de nascimento
//?          usa-se + para concatenar 
// ====================================================================