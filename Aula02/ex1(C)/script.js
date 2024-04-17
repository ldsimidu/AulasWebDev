function calcular(operacao) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var resultado = 0;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'Não é possível dividir por zero';
            }
            break;
    }

    document.getElementById('resultado').innerHTML = "Resultado: " + resultado;
}