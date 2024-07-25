const estudante = {
  nome: "Anna Maria",
  idade: 22,
  cpf: "12345678911",
  turma: "JavaScript",
  bolsista: true,
  telefones: ["12-1234-6541", "11-9898-9996"],
  endereco: [
    {
      rua: "Av. Paulista",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP",
    },
    {
      rua: "Rua Joaquim Paulista",
      numero: 99,
      cidade: "Rio de Janeiro",
      estado: "RJ",
    },
  ],
};

console.log(estudante.endereco);
console.log(estudante.endereco[0]);
console.log(estudante.endereco[1]);
console.log('-------------------------')

// adicionando um novo objeto no array

estudante.endereco.push({
  rua: "Rua dos Andradas",
  numero: 56,
  cidade: "Belo Horizonte",
  estado: "MG",
});
console.log(estudante.endereco)
console.log('-------------------------')
console.log(estudante.endereco[0])
console.log('-------------------------')
console.log(estudante.endereco[1])
console.log('-------------------------')
console.log(estudante.endereco[2])