const estudante = {
  nome: "José Eduardo",
  idade: 32,
  cpf: "12345678911",
  turma: "JavaScript",
};
console.log(estudante);
console.log("-------------");
// alterando o valor das propriedades

estudante.nome = "José Eduardo Silva";
console.log(estudante);
console.log("-------------");

// Adicionando uma propriedade
// email e telefone

estudante.email = "joseeduardosilva@gmail.com";
estudante.telefone = "(12) 9.1111-9999";
console.log(estudante);
console.log("-------------");

const aluno = {};
console.log(aluno);
aluno.nome = "Anna";
aluno.idade = 33;
aluno.email = "anna@gmail.com";

console.log(aluno);
