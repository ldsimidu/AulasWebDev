var torcedor = {
    nome: "São Paulino",
    brasileiro: "100",
    libertadores: "200",
    rebaixamentos: "300"
};

console.log(torcedor.nome);
console.log(torcedor.brasileiro);
console.log(torcedor.libertadores);
console.log(torcedor.rebaixamentos);

torcedor.mundiais = "3";
delete torcedor.rebaixamentos;
