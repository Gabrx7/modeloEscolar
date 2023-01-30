function meuEscopoTdsMat() {

    const materias = ['Lingua-Inglesa', 'Lingua-Portuguesa', 'Geografia', 'História', 'Sociologia', 'Matematica', 'Quimica', 'Biologia',
        'Analise e Proj de Sist', 'Ciência da Comp', 'Banco de Dados', 'Prog. Front-end', 'Prog. Mobile', 'Proj de Vida', 'Educ Financeira'];

    const matDiv = document.querySelector('.materias');
    const btnVerMateria = document.querySelector('.btnVerMat');

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

    function criaBotaoFechaMat() {
        const newButton = document.createElement("button");
        newButton.className = "btn-fecha-mat"
        const buttonText = document.createTextNode("Fechar materias");
        newButton.appendChild(buttonText);
        newButton.onclick = () => matDiv.innerHTML = "";
        document.querySelector(".materias").appendChild(newButton);
    }

    function tiraBtn() {
        btnVerMateria.style.display === 'none';
    }

    function verMateriasBtn() {
        limparDiv(matDiv)
        mostrarMaterias()
        
        criaBotaoFechaMat()

        alert(`0.2ok`)
    }

} meuEscopoTdsMat()