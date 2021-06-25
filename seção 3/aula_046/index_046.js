// a = ano
// m = mês
// d = dia
// h = horas
// M = minutos
// s = segundos
// ms = milesegundos

// a, m, d, h, M, s, ms

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//          Date() é uma função construtora, por isso começa sempre
//          com letra maiuscula
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const data =  new Date()
// console.log(data.toString())
//          Fri Jun 25 2021 13:49:20 GMT-0300 (Horário Padrão de Brasília)
//          aqui a função construtora Date() é armazenada em data
//          no console.log data vai ser exibido como toString, passa a
//          ser uma string
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//         Timestamp unix ou época unix
// const data =  new Date(0)
// console.log(data.toString())
//          Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília)
// ========================================================
// const tresHoras = 60 * 60 * 3 * 1000
// const data =  new Date(0 + tresHoras)
// console.log(data.toString())
//          Thu Jan 01 1970 00:00:00 GMT-0300 (Horário Padrão de Brasília)
//          esse codigo faz retornar a hora zero quando foi criado o
//          Timestamp unix ou época unix
//          perceba que tem 0 dentro de Date + a variavel tresHoras
//          isso essa var faz com que a hora sejá igual do local onde 
//          foi criado no caso no brasil a hora é (menos 3)

//          logica da conta (não tenho certeza disso aqui)
//          60 segundos (vezês) 60 segundos = 3.600 segundos ou (1 hora)
//          3.600 segundos (vezês) 3 = 10.800 segundos ou (3 horas)
//          10.800 segundos (vezês) 1000 = 10.800.000 segundos ou (3000 horas)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const data = new Date(2019, 3, 20, 15, 14, 27)
// console.log(data.toString())
//          Sat Apr 20 2019 15:14:27 GMT-0300 (Horário Padrão de Brasília)
// ========================================================
// const data = new Date(2019, 3, 20, 15, 14, 60)
// console.log(data.toString())
//          Sat Apr 20 2019 15:15:00 GMT-0300 (Horário Padrão de Brasília)
//          Perceba que o javascript não vai até o 60 segundo e sim até o 59
//          por isso que ficou assim (15:15:00) ao invez de (15:14:60)
//          60 é o mesmo que (00 segundo + 1 segundo)
// ========================================================
// const data = new Date(2019, 3, 20, 15, 14)
// console.log(data.toString())
//          Sat Apr 20 2019 15:14:00 GMT-0300 (Horário Padrão de Brasília)
//          quando se omite o último valor é zerado a última casa
//          no caso o (segundos) ficou 00
// ========================================================
// const data = new Date(2019, 3, 20, 15)
// console.log(data.toString())
//          Sat Apr 20 2019 15:00:00 GMT-0300 (Horário Padrão de Brasília)
//          e omite o último valor é zerado a última casa
//          no caso o (minutos) ficou 00
// ========================================================
// const data = new Date(2019, 3)
// console.log(data.toString())
//          Mon Apr 01 2019 00:00:00 GMT-0300 (Horário Padrão de Brasília)
//          esse é o minimo que se deve ter no caso (ano e mês)
//          de no caso deixar-mos somente 2019 passa a
//          ser considerado (milesegundos)
// ========================================================
// const data = new Date(2019, 0)
// console.log(data.toString())
//          Tue Jan 01 2019 00:00:00 GMT-0200 (Horário de Verão de Brasília)
//          mês 0 é janeiro pois é como um array no javascript
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//          geranmente de usa datas nesse formato
// const data = new Date('2021-06-25 14:41:59')
// console.log(data.toString())
// Fri Jun 25 2021 14:41:59 GMT-0300 (Horário Padrão de Brasília)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%          
// const data = new Date()
// console.log('Dia', data.getDate())
// Dia 25
// ========================================================
// const data = new Date()
// console.log('Mês', data.getMonth() + 1)
// Mês 6
// perceba que para o mês real tem que ter + 1, lembre que é array
// ========================================================
// const data = new Date()
// console.log('Ano', data.getFullYear())
// Ano 2021
// ========================================================
// const data = new Date()
// console.log('Horas', data.getHours())
// Horas 14
// ========================================================
// const data = new Date()
// console.log('Minutos', data.getMinutes())
// Minutos 48
// ========================================================
// const data = new Date()
// console.log('Segundos', data.getSeconds())
// Segundos 3
// ========================================================
// const data = new Date()
// console.log('Milesegundos', data.getMilliseconds())
// Milesegundos 809
// ========================================================
// const data = new Date()
// console.log('Dia da semana', data.getDay())
// Dia da semana 5
// perceba que para o Dia da semana começa no
// domingo= 0 e vai até sabado = 6 (lembre que é array)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function formataData(data) {
//     const dia = data.getDate()
//     const mes = data.getMonth() + 1
//     const ano = data.getFullYear()
//     const hora = data.getHours()
//     const min = data.getMinutes()
//     const seg = data.getSeconds()

//     return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
// }

// const data = new Date()
// const dataBrasil = formataData(data)
// console.log(dataBrasil)
// 25/6/2021 15:4:38
// perceba que não aparece o a esquerda
// ========================================================
//          para retornar um 0 a esquerda com um função
// function zeroAEsquerda(num) {
//     return num >= 10 ? num : `0${num}`
// }

// function formataData(data) {
//     const dia = zeroAEsquerda(data.getDate())
//     const mes = zeroAEsquerda(data.getMonth() + 1)
//     const ano = zeroAEsquerda(data.getFullYear())
//     const hora = zeroAEsquerda(data.getHours())
//     const min = zeroAEsquerda(data.getMinutes())
//     const seg = zeroAEsquerda(data.getSeconds())

//     return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
// }

// const data = new Date()
// const dataBrasil = formataData(data)
// console.log(dataBrasil)
// 25/06/2021 15:13:08
// ========================================================