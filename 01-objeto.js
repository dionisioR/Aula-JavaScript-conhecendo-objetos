// Objetos são representações do mundo real
// permitindo o encapsulamento de dados e comportamentos relacionados a essas entidades. 

const objPessoa = {
    nome: "John Doe",
    idade: 30,
    endereco: {
        rua: "Av. Paulista",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    }
}
console.log(objPessoa)
console.log(objPessoa.nome)
console.log(objPessoa.idade)
console.log(objPessoa.endereco)
console.log(objPessoa.endereco.rua)
console.log(objPessoa.endereco.numero)
console.log(objPessoa.endereco.cidade)
console.log(objPessoa.endereco.estado)
console.log('-----------------------')

console.log(objPessoa['nome'])
console.log(objPessoa['idade'])
console.log(objPessoa['endereco'])
console.log(objPessoa['endereco']['rua'])
console.log(objPessoa['endereco']['numero'])
console.log(objPessoa['endereco']['cidade'])
console.log(objPessoa['endereco']['estado'])