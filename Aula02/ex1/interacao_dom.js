var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');

var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');

function soma(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    if (isNaN(resultado))
        r1.textContent = "voce nao digitou porra"
    else
    r1.textContent = resultado;
}

function sub(){
    var resultado = n1.valueAsNumber - n2.valueAsNumber
    if (isNaN(resultado))
        r2.textContent = "voce nao digitou porra"
    else
    r2.textContent = resultado;
}

function div(){
    var resultado = n1.valueAsNumber / n2.valueAsNumber
    if (isNaN(resultado))
        r3.textContent = "voce nao digitou porra"
    else
    r3.textContent = resultado;
}

function mult(){
    var resultado = n1.valueAsNumber * n2.valueAsNumber
    if (isNaN(resultado))
        r3.textContent = "voce nao digitou porra"
    else
    r3.textContent = resultado;
}
