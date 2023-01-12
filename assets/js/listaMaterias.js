const diaSemana = document.querySelector('.diaSemana');
const materiasDoDia = document.querySelector('.materiasDoDia')


function anonima1() {

  const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const pegarData = new Date();
  const pegarDiaSemana = pegarData.getDay();
  const diaDaSemana = diasSemana[pegarData.getDay()];
  diaSemana.innerHTML = 'Materias para ' + diaDaSemana;

  falaMaterias(pegarDiaSemana);

  function falaMaterias(pegarDiaSemana) {
    const diaSemana = pegarDiaSemana

    const materias = ['Lingua-Inglesa', 'Lingua-Portuguesa', 'Geografia', 'História', 'Sociologia', 'Matematica', 'Quimica', 'Biologia',
      'Analise e Proj de Sist', 'Ciência da Comp', 'Banco de Dados', 'Prog. Front-end', 'Prog. Back-end', 'Proj de Vida', 'Educ Financeira',
      'Materia indisponivel'];

    if (diaSemana === 0) {
      return materiasDoDia.innerHTML = 'Não há materias para hoje!';
    } else if (diaSemana === 1) {
      return materiasDoDia.innerHTML +=
        `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
      ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    } else if (diaSemana === 2) {
      return materiasDoDia.innerHTML +=
        `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
      ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    }
    else if (diaSemana === 3) {
      return materiasDoDia.innerHTML +=
        `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
      ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    }
    else if (diaSemana === 4) {
      return materiasDoDia.innerHTML +=
        `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
      ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    }
    else if (diaSemana === 5) {
      return materiasDoDia.innerHTML +=
        `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
      ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    }
    else if (diaSemana === 6){
      return materiasDoDia.innerHTML +=
        `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
      ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    }else{
      return materiasDoDia.innerHTML +=
      `${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>
    ${materias[15]}<br>${materias[15]}<br>${materias[15]}<br>`;
    }

  }

}
anonima1();

/*
domingo 0
segunda 1
terça   2
quarta  3
quinta  4
sexta   5
sabado  6
*/