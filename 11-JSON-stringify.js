const estudante = require('./10-estudante.json')

// JSON.stringify(***) - converte o objeto em uma string no formato JSON
const stringEstudante = JSON.stringify(estudante)

console.log(typeof estudante)
console.log(estudante)
console.log(estudante.nome)
console.log('------------')

console.log(typeof stringEstudante)
console.log(stringEstudante)
console.log(stringEstudante.nome) // undefined - é uma string e não um objeto


// JSON.parse(***) - converte uma string no formato JSON em um objeto
// Faz o processo inverso

const objetoEstudante = JSON.parse(stringEstudante)

console.log(typeof objetoEstudante)
console.log(objetoEstudante)
console.log(objetoEstudante.nome) // Ana
