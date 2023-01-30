const materiasArray = ['Lingua-Inglesa', 'Lingua-Portuguesa', 'Geografia',
    'História', 'Sociologia', 'Matematica', 'Quimica', 'Biologia',
    'Analise e Proj de Sist', 'Ciência da Comp', 'Banco de Dados',
    'Prog. Front-end', 'Prog. Mobile', 'Proj de Vida', 'Educ Financeira'];

for (let i = 0; i < materiasArray.length; i++) {
    const materia = materiasArray[i];
    const div = document.createElement('div');
    div.classList.add('materias');
    div.textContent = materia;
    document.body.appendChild(div);
}