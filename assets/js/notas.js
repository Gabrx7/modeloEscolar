function calcular() {
    const num1 = document.querySelector('.nota1').value;
    const num2 = document.querySelector('.nota2').value;
    const num3 = document.querySelector('.nota3').value;
    const resultado = document.querySelector('.resultado-notas');
    const resultadoErros = document.querySelector('.resultado-notas-erros');

    const soma = Number(num1) + Number(num2) + Number(num3);
    const media = soma / 3;
    const valorRestante = 180 - soma;

    function total(valorRestante)  {
        if (valorRestante <= 0) {
            return `Você passou com um total de ${Math.abs(valorRestante)} pontos em sobra`
        } else {
            return `Ainda faltam ${valorRestante} pontos para você atingir o total`
        }
    }

    function validarNota(soma) {
        if (soma >= 300) {
            return 'Possivel erro em sua nota, não é possivel tirar esse valor'
        } else if (soma < 0) {
            return 'Possivel erro em sua nota, não é possivel tirar esse valor'
        } else {
            return ''
        }
    }

    function escreverNota() {
        resultado.innerHTML = ''
        resultado.innerHTML += `A sua nota é ${soma.toFixed(1)} <br>`;
        resultado.innerHTML += `A média de suas notas é ${media.toFixed(1)} <br>`;
        resultado.innerHTML += total(valorRestante.toFixed(1));
        resultadoErros.innerHTML = validarNota(soma);
    }
    escreverNota()
}
