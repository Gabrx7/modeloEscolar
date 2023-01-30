
const paragrafo = document.querySelector('.parteDoDia');

function gerarHora(){
    const pegarData = new Date();
    const pegarHora = pegarData.getHours();
    return pegarHora;
}

verificarTurno();

function verificarTurno() {
    const hora = gerarHora();

    if (hora >= 6 && hora < 12) {
        return 'Bom dia!';
    } else if (hora >= 12 && hora < 18) {
        return 'Boa tarde!';
    } else if (hora >= 18 && hora <= 23) {
        return 'Boa noite!';
    } else if (hora >= 0 && hora < 6) {
        return 'Boa madruga!';
    }
}

const pegarData = new Date();
paragrafo.innerHTML = verificarTurno() + '<br> Hoje é ' + pegarData.toLocaleString('pt-BR', { dateStyle: 'long' });