var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');

var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');

var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');


var r1 = document.getElementById('r1');
var r2 = document.getElementById('r2');
var r3 = document.getElementById('r3');
var r4 = document.getElementById('r4');

function soma(){
    var resultado = a1.valueAsNumber + a2.valueAsNumber;
    if (isNaN(resultado))
        r1.textContent = "voce nao digitou porra"
    else
    r1.textContent = resultado;
}

function sub(){
    var resultado = b1.valueAsNumber - b2.valueAsNumber
    if (isNaN(resultado))
        r2.textContent = "voce nao digitou porra"
    else
    r2.textContent = resultado;
}

function div(){
    var resultado = c1.valueAsNumber / c2.valueAsNumber
    if (isNaN(resultado))
        r3.textContent = "voce nao digitou porra"
    else
    r3.textContent = resultado;
}

function mult(){
    var resultado = d1.valueAsNumber * d2.valueAsNumber
    if (isNaN(resultado))
        r4.textContent = "voce nao digitou porra"
    else
    r4.textContent = resultado;
}
