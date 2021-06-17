// outra maneira de colocar aspas dupla na string
// let umaString = "um \"texto\" "
// console.log(umaString)
//=================================================
// let umaString = `um texto`
// console.log(umaString[-1])
//undefined
//=================================================
// let umaString = `um texto`
// console.log(umaString.charAt(6))
// t
//=================================================
// let umaString = `um texto`
// console.log(umaString.charAt(8))
// retorna vazio pois não existe
//=================================================
// let umaString = `um texto`
// console.log(`${umaString} em um lindo dia`)
//================================================
// let umaString = "um texto"
// console.log(umaString.indexOf('Texto'))
// 3
// a palavra texto começa no indece
// TEM DIFERENÇA DE MAIUSCULO E MINUSCULO
//================================================
// let umaString = "um texto"
// console.log(umaString.indexOf('um'))
// 0
//================================================
// let umaString = "um texto"
// console.log(umaString.indexOf('um', 3))
// -1
// retorna -1 porque após o índice 3 não existe a palavra um
//================================================
// let umaString = "um texto"
// console.log(umaString.indexOf('o', 3))
// 7
// aqui já tem após o indice 3 a palavra o
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// lastIndexOf esse metodo retorna da última palavra para a primeira
// let umaString = "um texto"
// console.log(umaString.lastIndexOf('o', 3))
// -1
// retorna -1 porque após o índice 3 não existe a palavra um
//================================================
// let umaString = "um texto"
// console.log(umaString.lastIndexOf('m', 3))
// 1
// retorna um pois está nessa posição (lembrando que começa pelo 0)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// expressões regulares
// let umaString = "Um texto"
// console.log(umaString.match(/[a-z]/))
// retorna isso de baixo
// [ 'm', index: 1, input: 'Um texto', groups: undefined ]
//================================================
// expressões regulares
// search, procura pela palavra, e mostra em qual indice está
// let umaString = "Um texto"
// console.log(umaString.search(/x/))
// 5
//================================================
// expressões regulares pode usar ou não se quiser
// let umaString = "Um texto"
// console.log(umaString.replace('Um', 'troca'))
// troca texto
// a palavra um foi alterada para troca
//================================================
// let umaString = "Um texto"
// console.log(umaString.replace(/Um/, 'Outra'))
// Outra texto
//================================================
// let umaString = "O rato roeu a roupa do rei de roma"
// console.log(umaString.replace(/r/, '#'))
// O #ato roeu a roupa do rei de roma
// apenas o primeiro r foi alterado para #
//================================================
// let umaString = "O rato roeu a roupa do rei de roma"
// console.log(umaString.replace(/r/g, '#'))
// O #ato #oeu a #oupa do #ei de #oma
// cololando o g após a expressão regular var ser todos alteradoss
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// length Retorna o comprimento(quantidade) de um objeto String.
// let umaString = "O rato roeu a roupa do rei de roma"
// console.log(umaString.length)
// 34
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// slice(method) Retorna uma seção(como se pegasse somente aquele treco) de uma string.
// let umaString = "O rato roeu a roupa do rei de roma"
// console.log(umaString.slice(2, 5))
// rat
//================================================
// let umaString = "O rato roeu a roupa do rei de roma"
// console.log(umaString.slice(2, 6))
// rato
//================================================
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.slice(-3))
// ma.
// perceba que com -3 é como se começasse da última para primeira
//================================================
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.slice(-5))
// roma.
//================================================
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.slice(-5, umaString.length -1))
// roma
// explicação (slice -5 = roma.) (-1 é menos a quantidade de letras que está em (roma.) = roma)
// perceba que assim fez com que o ponto final sumisse
//================================================
// ESSE É IGUAL O DE CIMA POREM COM MENOS CÓDIGO O RESULTADO É O MESMO
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.slice(-5, -1))
// roma
//================================================
// ESSE TAMBÉM É A MESMO COISA APENAS EXPLICANDO QUE TEM MAIS CÓDIGO AQUI
// USANDO SLICE É MAIS RAPIDO E FAZ A MESMA COISA QUE O SUBSTRING
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.slice(-5, -1))
// console.log(umaString.substring(umaString.length - 5, umaString.length -1))
// roma
// roma
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// split
// Divida uma string em substrings usando o separador
// especificado e retorne-as como uma array.
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.split(' '))
// string vazia
// vai fazer com que hajá separação em toda a frase que tiver espaço vazio
// [
//     'O',     'rato',
//     'roeu',  'a',
//     'roupa', 'do',
//     'rei',   'de',
//     'roma.'
// ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// toLocaleUpperCase
// faz toda String ficar em maisculo
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.toLocaleUpperCase())
// O RATO ROEU A ROUPA DO REI DE ROMA.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// toLowerCase
// faz toda String ficar em minusculo
// let umaString = "O rato roeu a roupa do rei de roma."
// console.log(umaString.toLowerCase())
