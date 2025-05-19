const tarefas = []

function add() {
    const input = document.querySelector('input')
    const tarefa = input.value
    if (tarefa.trim() === '') return
    tarefas.push({ texto: tarefa, feito: false })
    input.value = ''
    render()
}

function remove(index) {
    tarefas.splice(index, 1)
    render()
}

function atualizarEstilo(span, feito){
    span.style.textDecoration = feito ? 'line-through' : 'none'
    span.style.opacity = feito ? '0.4' : '1'
}


function render() {
    const ul = document.querySelector('ul')
    ul.innerHTML = null
    tarefas.forEach(function (t, index) {
        const li = document.createElement('li')
        const section = document.createElement('section')

        const span = document.createElement('span')
        span.innerText = t.texto
        atualizarEstilo(span, t.feito)

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'input-2'
        checkbox.checked = t.feito
        checkbox.onchange = function () {
            t.feito = checkbox.checked
            atualizarEstilo(span, t.feito)
        }


        const button = document.createElement('button')
        button.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        button.className = 'botao-2'
        button.onclick = function () {
            remove(index)
        }
        li.appendChild(section)
        section.appendChild(checkbox)
        section.appendChild(span)
        ul.appendChild(li)
        li.appendChild(button)
    })
}

