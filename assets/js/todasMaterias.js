const materiasArray = ['Lingua-Inglesa', 'Lingua-Portuguesa', 'Geografia',
    'História', 'Sociologia', 'Matematica', 'Quimica', 'Biologia',
    'Analise e Proj de Sist', 'Ciência da Comp', 'Banco de Dados',
    'Prog. Front-end', 'Prog. Mobile', 'Proj de Vida', 'Educ Financeira'];

let isArrayOpened = false;

const createMaterias = () => {
    for (let i = 0; i < materiasArray.length; i++) {
        const materia = materiasArray[i];
        const div = document.createElement('div');
        div.classList.add('materias');
        div.textContent = materia;
        document.body.appendChild(div);
    }
};

const btnOpenArray = document.createElement('button');
btnOpenArray.textContent = 'Abrir Array';
btnOpenArray.addEventListener('click', () => {
    if (!isArrayOpened) {
        createMaterias();
        isArrayOpened = true;
    }
});
document.body.appendChild(btnOpenArray);

const btnCloseArray = document.createElement('button');
btnCloseArray.textContent = 'Fechar Array';
btnCloseArray.addEventListener('click', () => {
    if (isArrayOpened) {
        document.querySelectorAll('.materias').forEach(element => {
            element.remove();
        });
        isArrayOpened = false;
    }
});
document.body.appendChild(btnCloseArray);