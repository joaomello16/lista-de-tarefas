const tarefas = []

function add(){
    const input = document.querySelector('input')
    const tarefa = input.value
    if(tarefa.trim() === '')return
    tarefas.push(tarefa)
    console.log(tarefas)
    input.value = ''
    render()
}

function remove(index){
    tarefas.splice(index , 1)
    render()
}

function render(){
    const ul = document.querySelector('ul')
    ul.innerHTML = null
    tarefas.forEach(function(t, index){
        const li = document.createElement('li')
        li.innerText = t
        ul.appendChild(li)

        const button = document.createElement('button')
        button.innerHTML = 'Excluir'
        button.onclick = function(){
            remove(index)
        }
        li.appendChild(button)
    })
}

