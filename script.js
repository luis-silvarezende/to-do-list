const inputTxt = document.querySelector('input')
const botao = document.querySelector('button')
const elementoUl = document.querySelector('ul')

const tarefas = []

botao.setAttribute('onclick', 'addTarefa()')

inputTxt.addEventListener('keypress', (evento) =>{
    if (evento.key == 'Enter'){
        addTarefa()
    }
})

function addTarefa(){
    const textoDoCampo = inputTxt.value
    tarefas.push(textoDoCampo)
    inputTxt.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){

    elementoUl.innerHTML = ''

    for (tarefa of tarefas){
        const elementoLi = document.createElement('li')
        const textoDoCampo = document.createTextNode(tarefa)

        const elementoLink = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        elementoLink.setAttribute('href', '#')
        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        const textoLink = document.createTextNode('X')
        elementoLink.appendChild(textoLink)

        elementoLi.appendChild(textoDoCampo)
        elementoUl.appendChild(elementoLi)
        elementoLi.appendChild(elementoLink)
    }
}

function deletaTarefa(pos){
    tarefas.splice(pos, 1)
    mostrarTarefas()
}