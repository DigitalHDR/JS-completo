const inputTarefa = document.querySelector('.input_tarefa')
const btnTarefa = document.querySelector('.btn_tarefa')
const tarefas = document.querySelector('.tarefas')
//todo =====================================================
inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return //? se o input estiver vazio não envia nada
        criaTarefa(inputTarefa.value)
    }
})
//todo =====================================================
function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}
//todo =====================================================
function criaButtonApagar(li) {
    li.innerHTML += ' ' //? cria um espaço no texto que já está la
    const botaoApagar = document.createElement('button')
    botaoApagar.innerHTML = 'Apagar'
    // botaoApagar.classList.add('apagar') //? igual o de baixo
    botaoApagar.setAttribute('class', 'apagar') //? igual o de cima
    li.appendChild(botaoApagar)

}
//todo =====================================================
function salvarTarefa() {
    const liTarefas = document.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerHTML
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)

}
//todo =====================================================
function criaLi() {
    const li = document.createElement('li')
    return li
}
//todo =====================================================
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarafas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefas of listaDeTarefas) {
        salvarTarefa(tarefas)
    }
}
adicionaTarefasSalvas()
//todo =====================================================
function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaButtonApagar(li)
    salvarTarefa()
}
//todo =====================================================
btnTarefa.addEventListener('click', (e) => {
    if (!inputTarefa.value) return //? se o input estiver vazio não envia nada
    criaTarefa(inputTarefa.value)
})
//todo =====================================================
//?         ISSO FAZ APAGAR O ELEMENTO PAI
document.addEventListener('click', (e) => {
    const elemento = e.target
    if (elemento.classList.contains('apagar')) { //? só faz funciona onde tiver class apagar
        elemento.parentElement.remove() //? remove o elemento pai que foi clicado
        salvarTarefa()
    }
})