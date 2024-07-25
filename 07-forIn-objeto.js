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

  // percorrendo o objeto com for-in
  // observe que teremos um problema com o objeto 'endereco'
  // Chave: endereco, Valor: [object Object],[object Object]
  for (let chave in estudante) {
    console.log(`Chave: ${chave}, Valor: ${estudante[chave]}`);
  }


  console.log('-----------------------')
  // para evitar esse problema
 for(let chave in estudante){
    const tipo = typeof estudante[chave]
    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`Chave: ${chave}, Valor: ${estudante[chave]}`)
    }
 }
  