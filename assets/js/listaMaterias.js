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

    const materiasSegunda = `${materias[1]}<br>${materias[2]}<br>
    ${materias[3]}<br>${materias[4]}<br>${materias[5]}<br>${materias[6]}<br>`;

    const materiasTerca = `${materias[1]}<br>${materias[2]}<br>
    ${materias[3]}<br>${materias[4]}<br>${materias[5]}<br>${materias[6]}<br>`;

    const materiasQuarta = `${materias[1]}<br>${materias[2]}<br>
    ${materias[3]}<br>${materias[4]}<br>${materias[5]}<br>${materias[6]}<br>`;

    const materiasQuinta = `${materias[1]}<br>${materias[2]}<br>
    ${materias[3]}<br>${materias[4]}<br>${materias[5]}<br>${materias[6]}<br>`;

    const materiasSexta = `${materias[1]}<br>${materias[2]}<br>
    ${materias[3]}<br>${materias[4]}<br>${materias[5]}<br>${materias[6]}<br>`;

    const materiasIndisponiveis = materias[15]

    if (diaSemana === 0 || diaDaSemana === 6) {
      return materiasDoDia.innerHTML = 'Não há materias para hoje! Final de semana!';
    }
    else if (diaSemana === 1) {
      return materiasDoDia.innerHTML += materiasSegunda;
    }
    else if (diaSemana === 2) {
      return materiasDoDia.innerHTML += materiasTerca;
    }
    else if (diaSemana === 3) {
      return materiasDoDia.innerHTML += materiasQuarta;
    }
    else if (diaSemana === 4) {
      return materiasDoDia.innerHTML += materiasQuinta;
    }
    else if (diaSemana === 5) {
      return materiasDoDia.innerHTML += materiasSexta;
    } else {
      return materiasDoDia.innerHTML += materiasIndisponiveis;
    }
  }
} anonima1();
