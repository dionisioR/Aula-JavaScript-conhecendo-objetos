const estudante = {
    nome: 'John Doe',
    idade: 25,
    matricula: '1234567890',
    curso: 'Engenharia de Software',
    endereco: {
        rua: 'Av. Paulista',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    },

    // Atenção para a palavra THIS
    exibeInformacoes: function() {
        return `
        Nome: ${this.nome}  
        Idade: ${this.idade}  
        Endereço: 
            ${this.endereco.rua}, 
            ${this.endereco.numero}, 
            ${this.endereco.cidade} 
        Matrícula: ${this.matricula} 
        Curso: ${this.curso}`
    },


    notas: [8.5, 9.0, 7.8, 9.5],
    
    // Atenção para a palavra THIS
    calculaMedia: function() {
        let somaDasNotas = 0
        for(let i = 0; i < this.notas.length; i++) {
            somaDasNotas += this.notas[i]
        }
        return somaDasNotas / this.notas.length
    },
   
}
console.log(estudante)
console.log('--------------------')
console.log(estudante.exibeInformacoes())
console.log('--------------------')
console.log(estudante.calculaMedia())