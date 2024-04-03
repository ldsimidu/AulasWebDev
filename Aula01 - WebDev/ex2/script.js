var aluno = {
    ra: 22010911,
    nome: 'Lucas Derenze Simidu',
    curso: 'Engenharia de Software',
    ativo: true
};

console.log(aluno.ra)
console.log(aluno.nome)
console.log(aluno.curso)
console.log(aluno.ativo)

aluno.datanasc = '08/08/2006';
console.log(aluno.datanasc)

delete aluno.ativo

console.log(aluno.ativo)