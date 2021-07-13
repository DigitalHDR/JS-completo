//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*                    | splice |
//* O método splice() altera o conteúdo de uma lista,
//* adicionando novos elementos enquanto remove elementos antigos.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//               -5        -4       -3         -2        -1
//                0         1        2          3         4
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
// nomes.splice(4, 1)
// console.log(nomes)
//?         [ 'Maria', 'João', 'Eduardo', 'Gabriel' ]
//todo =====================================================
//               -5        -4       -3         -2        -1
//                0         1        2          3         4
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
// const removidos = nomes.splice(0, 1)

// nomes.splice(3, 2)
// console.log(nomes)
//?         [ 'João', 'Eduardo', 'Gabriel' ]
//todo =====================================================
// const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
// const removidos = nomes.splice(0, 1)

// console.log(nomes, removidos)
//?         [ 'João', 'Eduardo', 'Gabriel', 'Júlia' ] [ 'Maria' ]
//todo =====================================================
