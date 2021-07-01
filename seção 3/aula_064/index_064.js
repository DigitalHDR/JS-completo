// try {
//     //?         É executada quando não há erros
// } catch (error) {
//     //?         É executada quando há erros
// } finally {
//     //?         Sempre
// }
//todo =====================================================
// try {
//     //?         É executada 
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')
// } catch (error) {
//     //?         É executada quando há erros
//     console.log('Tratando o erro')
// } finally {
//     //?         Sempre
//     console.log('FINALLY: Eu sempre sou executado')
// }
//?         Abri um arquivo
//?         Manipulei o arquivo e gerou erro
//?         Fechei o arquivo
//?         FINALLY: Eu sempre sou executado
//todo =====================================================
// try {
//     //?         É executada
//     console.log(error)

//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')
// } catch (error) {
//     //?         É executada quando há erros
//     console.log('Tratando o erro')
// } finally {
//     //?         Sempre
//     console.log('FINALLY: Eu sempre sou executado')
// }
//?         Tratando o erro
//?         FINALLY: Eu sempre sou executado
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | instanceof |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function retornaHora(data) {
//     if (!(data instanceof Date)) {
//         console.log('Não é')
//     }
// }

// retornaHora(11)
//?         Não é
//?         (data) não é uma instance de (Date)
//todo =====================================================
// function retornaHora(data) {
//     if (!(data instanceof Date)) {
//         console.log('Não é')
//     }
// }

// retornaHora(new Date())
//?         Retorna vazio porque agora é (data) é uma instance de (Date)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {

//     })
// }

// const hora = retornaHora()
// console.log(hora)
//?         15:56:47
//todo =====================================================
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour12: true
//     })
// }

// const hora = retornaHora()
// console.log(hora)
//?         3:58:13 PM
//todo =====================================================
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//     })
// }

// const hora = retornaHora()
// console.log(hora)
//?         04:00:55 PM
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//     })
// }

// const data = new Date('01-01-2000 12:58:12')//?         mudou aqui
// const hora = retornaHora(data)
// console.log(hora)
//?         00:58:12 PM
//todo =====================================================
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//     })
// }

// try {
//     const data = new Date('01-01-2000 12:58:12')
//     const hora = retornaHora(11) //?         mudou aqui
//     console.log(hora)
// } catch(error) {
//     // Tratar erro
// } finally {
//     console.log('Tenha um bom dia.')
// }
//?         Tenha um bom dia.
//todo =====================================================
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//     })
// }

// try {
//     const data = new Date('01-01-2000 12:58:12')
//     const hora = retornaHora(11) 
//     console.log(hora)
// } catch(error) {
//     // Tratar erro
//     console.log(error) //?         mudou aqui
// } finally {
//     console.log('Tenha um bom dia.')
// }
//?         TypeError: Esperandop instância de Date.
//todo =====================================================
// function retornaHora(data) {
//     if (data && !(data instanceof Date)) {
//         throw new TypeError('Esperandop instância de Date.')
//     }

//     if (!data) {
//         data = new Date()
//     }

//     return data.toLocaleTimeString('pt-BR', {
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: true,
//     })
// }

// try {
//     const data = new Date('01-01-2000 12:58:12')
//     const hora = retornaHora() //?         mudou aqui
//     console.log(hora)
// } catch(error) {
//     // Tratar erro
//     console.log(error) 
// } finally {
//     console.log('Tenha um bom dia.')
// }
//?         04:13:22 PM
//?         Tenha um bom dia.
//todo =====================================================