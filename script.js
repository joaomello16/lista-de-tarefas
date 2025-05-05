let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function salvar(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

function add(){
    const input = document.querySelector('input')
    const tarefa = input.value
    if (tarefa.trim() === '') return
    tarefas.push(tarefa)
    salvar()
    render()
    input.value =''
}

function render(){
    const ul = document.querySelector('ul')
    ul.innerHTML = null
    
    tarefas.forEach(function(t){
        const li = document.createElement('li')
        li.innerText = t
        ul.appendChild(li)
    })
    
    
}

function deleAll(){
    localStorage.clear()
    location.reload(true)
}
render()

