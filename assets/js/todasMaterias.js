const materias = ['Lingua-Inglesa', 'Lingua-Portuguesa', 'Geografia', 'História', 'Sociologia', 'Matematica', 'Quimica', 'Biologia',
    'Analise e Proj de Sist', 'Ciência da Comp', 'Banco de Dados', 'Prog. Front-end', 'Prog. Mobile', 'Proj de Vida', 'Educ Financeira'];

const matDiv = document.querySelector('.materias');
const btnVerMat = document.querySelector('.btn-ver-mat');

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
        btnVerMat.style.display = 'none';
    }
}

function criaBotaoFechaMat() {
    const newButton = document.createElement("button");
    newButton.className = "btn-fecha-mat"
    const buttonText = document.createTextNode("Fechar materias");
    newButton.appendChild(buttonText);
    newButton.onclick = () => {
        matDiv.innerHTML = ""
        btnVerMat.style.display = 'block';
        btnVerMat.style.position = 'relative';
        btnVerMat.style.left = '50%';
        btnVerMat.style.top = '50%';
        btnVerMat.style.transform = 'translate(-50%, -50%)';
    }
    document.querySelector(".materias").appendChild(newButton);
}

function verMateriasBtn() {
    limparDiv(matDiv)
    mostrarMaterias()
    criaBotaoFechaMat()
}


