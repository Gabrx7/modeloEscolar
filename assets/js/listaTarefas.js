const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function focoinput (){
    inputTarefa.setAttribute("style", "color: rgb(190, 190, 190)");
    inputTarefa.value = 'Digite aqui:';

    inputTarefa.addEventListener('focus', () => {
        inputTarefa.setAttribute("style", "color: #fff")
        inputTarefa.value = ''
    });
}
focoinput();

function criaLi() {
    const li = document.createElement('p');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value);
    }
});

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value || inputTarefa.value === 'Digite aqui:')return
        criaTarefa(inputTarefa.value);
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('p');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();
