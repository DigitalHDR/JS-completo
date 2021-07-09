function retonaFuncao() {
    const nome = 'Lucas'
    return function () {
        return nome
    }
}

const funcao = retonaFuncao('fernando')
console.dir(funcao)
console.log(funcao())