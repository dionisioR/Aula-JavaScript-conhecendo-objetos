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
// devolve um array com as chaves do objeto
  console.log(Object.keys(estudante))

  // verificando se o objeto possui a propriedade nome
  console.log(Object.keys(estudante).includes('nome'))  // true

  // verificando se o objeto possui a propriedade email
  console.log(Object.keys(estudante).includes('email'))  // false