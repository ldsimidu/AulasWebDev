var frutas = ['Banana', 'Maca', 'Abacaxi','Pera'];

console.log('----FRUTAS----')
console.log('--Quantidade de Elementos em Frutas: ' + frutas.length);
console.log('--Incluindo a Melancia no Array');
frutas.push('Melancia');
console.log('--Nova Quantidade de Elementos em Frutas: ' + frutas.length);
console.log('Itens armazenados em FRUTAS');
console.log(frutas);

var veiculos = ['Polo', 'Virtus', 'T-Cross', 'Nivus', 'Jetta'];

console.log('-----VEÍCULOS-----');
console.log('Imprimindo um veículo de cada vez');
console.log(veiculos[0]);
console.log(veiculos[1]);
console.log(veiculos[2]);
console.log(veiculos[3]);
console.log('--ELEMENTOS NO ARRAY VEÍCULOS--');
console.log(veiculos.length);
console.log('--Incluindo o novo veículo ao array');
veiculos.push('Golf');
console.log('--ELEMENTOS NO ARRAY VEÍCULOS--' + veiculos.length);
console.log(veiculos);

console.log('--COMANDO DE REPETIÇÃO FOR--');

for (i=0; i<veiculos.length; i++){
    console.log(veiculos[i]);
}

