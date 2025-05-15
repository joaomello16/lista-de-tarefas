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
        const section = document.createElement('section')
        
        const checkbox = document.createElement('input')
        checkbox.className = 'input-2'
        checkbox.type = 'checkbox'
        checkbox.onchange = function(){
            span.style.textDecoration =  checkbox.checked ? 'line-through' : 'none'
            span.style.opacity = checkbox.checked ? '0.4' : '1'
        }

        const span = document.createElement('span')
        span.innerText = t
        
        const button = document.createElement('button')
        button.innerHTML = 'Excluir'
        button.onclick = function(){
            remove(index)
        }
        li.appendChild(section)
        section.appendChild(checkbox)
        section.appendChild(span)
        ul.appendChild(li)
        li.appendChild(button)
    })
}

