const estudante = {
    nome: 'Anna Maria',
    idade: 22,
    cpf: '12345678911',
    turma: 'JavaScript',
    bolsista: true,
    endereco: {
        rua: 'Av. Paulista',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    },
    telefone1: '(12) 2121-5555',
    telefone2: '(12) 3434-6666',
    telefone3: '(12) 5656-7777'
}
console.log(estudante)
console.log('--------------------------------')
// Observe que temos no objeto acima vários telefones
// podemos melhorar isso com um array
const aluno = {
    nome: 'Anna Maria',
    idade: 22,
    cpf: '12345678911',
    turma: 'JavaScript',
    bolsista: true,
    endereco: {
        rua: 'Av. Paulista',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    },
    telefones: ['(12) 2121-5555','(12) 3434-6666', '(12) 5656-7777'],
}
console.log(aluno)

// Agora podemos facilmente adicionar, remover ou acessar telefones

aluno.telefones.push('(12) 8787-9999')
console.log(aluno)
console.log('--------------------------------')

aluno.telefones.shift()
console.log(aluno)
console.log('--------------------------------')

console.log(estudante.telefone1)
console.log(aluno.telefones[0])