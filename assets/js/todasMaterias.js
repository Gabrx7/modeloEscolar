const materias = ['Lingua-Inglesa', 'Lingua-Portuguesa', 'Geografia', 'História', 'Sociologia', 'Matematica', 'Quimica', 'Biologia',
    'Analise e Proj de Sist', 'Ciência da Comp', 'Banco de Dados', 'Prog. Front-end', 'Prog. Mobile', 'Proj de Vida', 'Educ Financeira'];

const matDiv = document.querySelector('.materias');

function limparDiv(div) {
    div.innerHTML = "";
}

function mostrarMaterias() {
    for (let i = 0; i < materias.length; i++) {
        const newContent = materias[i];
        const newP = document.createElement("h3");
        const newText = document.createTextNode(newContent);
        newP.appendChild(newText);
        matDiv.appendChild(newP);
    }
}



function verMateriasBtn() {
    limparDiv(matDiv)
    mostrarMaterias()
}


