var aluno1 = {
    ra: 22010911,
    nome: "Chateu Le Pin'To",
    curso: 'Programa',
    ativo: true
};

console.log(aluno1.ra);
console.log(aluno1.nome);
console.log(aluno1.curso);
console.log(aluno1.ativo);

aluno1.datanasc = '11/09/2001';

console.log(aluno1.datanasc);

delete aluno1.ativo;