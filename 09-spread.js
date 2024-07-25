console.log(Math.max(1, 2, 3, 5, 9, 10, 100, -5));
console.log(Math.min(1, 2, 3, 5, 9, 10, 100, -5, -10, -55, -1000));

const arrMax = [1, 2, 3, 5, 9, 10, 100, -5];
const arrMin = [1, 2, 3, 5, 9, 10, 100, -5, -10, -55, -1000];

console.log(Math.max(arrMax)); // NaN
console.log(Math.min(arrMin)); // NaN

console.log(Math.max(...arrMax)); // 100
console.log(Math.min(...arrMin)); // -1000

console.log("---------------------------------");

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

function exibirTelefones(telefone1, telefone2) {
  console.log(`Telefone 1: ${telefone1}`);
  console.log(`Telefone 2: ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]); // tradicional
console.log("---------------");
exibirTelefones(...estudante.telefones); // spread operator


console.log("---------------------------------");

// Vamos imprimir os dados de uma carta
const dadosEnvio = {
    destinatario: estudante.nome,
    endereco: estudante.endereco[0] // observe que temos um objeto aqui
}

console.log(dadosEnvio)
console.log("---------------------------------");


// Uma outra alternativa seria
const dadosEnvio2 = {
    destinatario: estudante.nome,
    rua: estudante.endereco[0].rua, // muito verboso
    numero: estudante.endereco[0].numero,
    cidade: estudante.endereco[0].cidade,
    estado: estudante.endereco[0].estado
}

console.log(dadosEnvio2)
console.log("---------------------------------");

// Agora, vamos utilizar destructuring para simplificar
const dadosEnvio3 = {
    destinatario: estudante.nome,
    ...estudante.endereco[0] // spread operator
}
console.log(dadosEnvio3)

