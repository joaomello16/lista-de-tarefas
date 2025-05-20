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
        const section1 = document.createElement('section')
        const section2 = document.createElement('section')
        const span = document.createElement('span')
        const checkbox = document.createElement('input')
        const btnExcluir = document.createElement('button')
        const btnEditar = document.createElement('button')

        checkbox.className = 'input-2'
        btnExcluir.className = 'botao-2'
        btnEditar.className = 'botao-2'
        section2.className = 'c-xedit'
        btnExcluir.innerHTML = '<span class="material-symbols-outlined">delete</span>'
        btnEditar.innerHTML = '<span class="material-symbols-outlined">edit</span>'
        checkbox.type = 'checkbox'
        
        span.innerText = t.texto

        checkbox.checked = t.feito
        atualizarEstilo(span, t.feito)
        
        checkbox.onchange = function () {
            t.feito = checkbox.checked
            atualizarEstilo(span, t.feito)
        }


        btnExcluir.onclick = function () {
            remove(index)
        }

        btnEditar.onclick = function () {
            const novoTexto = prompt("Editar tarefa:", t.texto)
            if (novoTexto !== null && novoTexto.trim() !== "") {
                t.texto = novoTexto.trim()
                render()
            }
        }

        li.appendChild(section1)
        li.appendChild(section2)
        section1.appendChild(checkbox)
        section1.appendChild(span)
        section2.appendChild(btnEditar)
        section2.appendChild(btnExcluir)
        ul.appendChild(li)
    })
}

