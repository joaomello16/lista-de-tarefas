const tarefas = ['Estudar HTML', 'Estudar CSS', 'Estudar JS']


function add() {
    const input = document.querySelector('input')
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ''
    render()
}

function render() {
    const ul = document.querySelector('ul')
    ul.innerHTML = null
    tarefas.forEach(function (tarefa) {
        const li = document.createElement('li')
        li.innerText = tarefa
        console.log(tarefa)
        ul.appendChild(li)

    })
}
render()