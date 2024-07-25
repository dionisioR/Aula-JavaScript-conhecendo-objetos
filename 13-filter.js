// Neste exemplo vamos buscar todos os registros que não possuem cep no atributo endereco
const estudantes = require('./12-estudantes.json')

function buscaEstudantesSemCep(lista, propriedade) {
    return lista.filter(
        (estudante) => {
            return !estudante.endereco.hasOwnProperty(propriedade)
        }
    )
}

const listaEnderecosIncompletos = buscaEstudantesSemCep(estudantes,'cep')
console.log(listaEnderecosIncompletos)  