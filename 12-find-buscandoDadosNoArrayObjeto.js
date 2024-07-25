const estudantes = require('./12-estudantes.json')

function buscaInformacao(lista, chave, valor){
    return lista.find(estudante => estudante[chave].includes(valor))
}

let estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet')
console.log(estudanteEncontrado)

estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'naoExiste')
console.log(estudanteEncontrado)

console.log('-------------------')
// dará um erro pois a chave 'naoExiste' não existe no objeto
// para utilizar o método find() vc deve garanti que a chave procurada exista no objeto
// estudanteEncontrado = buscaInformacao(estudantes, 'naoExiste', 'Ana')
// console.log(estudanteEncontrado)
console.log('-------------------')

estudanteEncontrado = buscaInformacao(estudantes, 'telefone', '2047970414')
console.log(estudanteEncontrado)