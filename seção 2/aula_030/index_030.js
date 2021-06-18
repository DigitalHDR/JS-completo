// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  Array
// uma array é indexada igual um string
// porém por cada elemento
// exemplos
// veja abaixo cada um é um elemento ou índice
//      0        1        2
// ['lucas','pabline','júlia']
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// console.log(alunos)
// [ 'lucas', 'pabline', 'júlia' ]
// =============================================
// const alunos = ['lucas', 'pabline', 'júlia', 1, true, null]
// console.log(alunos)
// [ 'lucas', 'pabline', 'júlia', 1, true, null ]
// isso funciona mais não é bom colocar nada misturado deixe cade
// array para um tipo de cada
// =============================================
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// console.log(alunos[0])
// lucas
// =============================================
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// alunos[0] = 'ana'
// console.log(alunos[0])
// ana
// =============================================
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// alunos[0] = 'ana'
// console.log(alunos)
// [ 'ana', 'pabline', 'júlia' ]
// =============================================
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// alunos[0] = 'ana'
// alunos[3] = 'aline'
// console.log(alunos)
// [ 'ana', 'pabline', 'júlia', 'aline' ]
// =============================================
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// alunos[alunos.length] = 'luiza'
// alunos[alunos.length] = 'fabio'
// alunos[alunos.length] = 'luana'
// console.log(alunos)
// [ 'lucas', 'pabline', 'júlia', 'luiza', 'fabio', 'luana' ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  push() (method)
// Insere um novo elemento no final do array
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// alunos.push('luiza')
// alunos.push('ana')
// console.log(alunos)
// [ 'lucas', 'pabline', 'júlia', 'luiza', 'ana' ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  unshift() (method)
// Insere um novo elemento no início do array
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// alunos.unshift('luiza')
// console.log(alunos)
// [ 'luiza', 'lucas', 'pabline', 'júlia' ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  pop() (method)
// Remove o último elemento do array
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']

// const remove = alunos.pop()
// nessa caso irá mostrar apenas o que foi removido

// console.log(alunos)
// [ 'lucas', 'pabline' ]
// console.log(remove)
// júlia
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  shift() (method)
// Remove o primeiro elemento do array
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// const remove = alunos.shift()
// console.log(remove)
// lucas
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  REMOVENDO UM ELEMENTO SEM PERDER O INDICE
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// delete alunos[1]
// console.log(alunos)
// =============================================
//                    0        1        2
// const alunos = ['lucas','pabline','júlia']
// delete alunos[1]
// console.log(alunos[1])
// undefined
// perceba que o indece 1 está vazio
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                   ACESSANDO INDECE QUE NÃO EXISTEM
// const alunos = ['lucas','pabline','júlia']
// console.log(alunos[50])
// undefined
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  array com slice
// const alunos = ['lucas','pabline','júlia']
// alunos.push('luiza')
// alunos.push('vitoria')
// console.log(alunos.slice(0, 3))
// [ 'lucas', 'pabline', 'júlia' ]
// =============================================
// const alunos = ['lucas','pabline','júlia']
// alunos.push('luiza')
// alunos.push('vitoria')
// console.log(alunos.slice(0, -1))
// [ 'lucas', 'pabline', 'júlia', 'luiza' ]
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  typeof de Array
// const alunos = ['lucas','pabline','júlia']
// console.log(typeof(alunos))
// object
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  instanceof Array
// const alunos = ['lucas','pabline','júlia']
// console.log(alunos instanceof Array)
// true
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const alunos = ['lucas','pabline','júlia']
// console.log(alunos instanceof Array)
// true

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                  Const com valores mutáveis
// Isso pode

// const array = [1, 2, 3, 4, 5];
// array.pop();
// array[0] = 1024;
// console.log(array); // [ 1024, 2, 3, 4 ]
 
// Isso NÃO pode

// const array = [1, 2, 3, 4, 5];
// array = 'Legal'; // Assignment to constant variable.
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%