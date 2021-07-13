//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                | revisões do curso |
//*                       arrays
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// nomes[2] = 'João'
// console.log(nomes)
//?         [ 'Lucas', 'Pabline', 'João' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*           | arrays delete um elemento |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// nomes[2] = 'João'
// delete nomes[1]
// console.log(nomes)
//?         [ 'Lucas', <1 empty item>, 'João' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | new arrays | com ( )
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = new Array('Lucas', 'Pabline', 'Ana')
// nomes[2] = 'João'
// delete nomes[1]
// console.log(nomes)
//?         [ 'Lucas', <1 empty item>, 'João' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*           | valores por referencia |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// const novo = nomes

// novo.pop()
// console.log(nomes)
//?         [ 'Lucas', 'Pabline' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | com operador spreed |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// const novo = [...nomes]

// novo.pop()
// console.log(nomes)
// console.log(novo)
//?         [ 'Lucas', 'Pabline', 'Ana' ]
//?         [ 'Lucas', 'Pabline' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | índice do array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// console.log(nomes.length)
//?         3
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*            | pop()  para remover elementos |
//* O método pop() remove o último elemento de
//* um array e retorna aquele elemento,
//* ele elemento removido pode ser armazenado dentro de variavel
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// nomes.pop(1)
// console.log(nomes)
//?         [ 'Lucas', 'Pabline' ]
//todo =====================================================
// const nomes = ['Lucas', 'Pabline', 'Ana']
// const nomeRemovido = nomes.pop(1)
// console.log(nomes)
// console.log(nomeRemovido)
//?         [ 'Lucas', 'Pabline' ]
//?         Ana
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*          | push |
//* para adicionar elementos no final do array
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana']
// nomes.push('João')
// console.log(nomes)
//?         [ 'Lucas', 'Pabline', 'Ana', 'João' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | unshift |
//* insere no inicio do array
//* não é muito performático pois vai alterar todo o array
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana', 'Wallace', 'Rosana']
// const novo = nomes.slice(1, 3)
// console.log(novo)
//?         [ 'Pabline', 'Ana' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | slice |
//* O método slice() retorna uma cópia de parte de um array a
//* partir de um subarray criado entre as posições início e fim
//* (fim não é necessário) de um array original. O Array 
//* original não é modificado.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['Lucas', 'Pabline', 'Ana', 'Wallace', 'Rosana']
// const novo = nomes.slice(0, -1)
// console.log(novo)
//?         [ 'Lucas', 'Pabline', 'Ana', 'Wallace' ]
//todo =====================================================
// const nomes = ['Lucas', 'Pabline', 'Ana', 'Wallace', 'Rosana']
// const novo = nomes.slice(1, -1)
// console.log(novo)
//?         [ 'Pabline', 'Ana', 'Wallace' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | split |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const nome = 'lucas fernando silva'
const nomes = nome.split(' ')
console.log(nomes)
//?         [ 'lucas', 'fernando', 'silva' ]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | join |
//* O método join() junta todos os elementos de um array 
//* (ou um array-like object) em uma string e retorna esta string
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const nomes = ['lucas', 'fernando', 'silva']
// const nome = nomes.join(' ')
// console.log(nome)
//?         lucas fernando silva
//todo =====================================================
