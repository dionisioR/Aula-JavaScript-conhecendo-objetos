const objPessoa = {
    nome: "John Doe",
    idade: 30,
    curso: 'JavaScript'
}

// Sempre que possível utilize o return em funções
const exibeDados = (objeto, campoDoObjeto) => {
    return objeto[campoDoObjeto]
}

console.log(exibeDados(objPessoa, 'nome'))
console.log(exibeDados(objPessoa, 'idade'))
console.log(exibeDados(objPessoa, 'curso'))