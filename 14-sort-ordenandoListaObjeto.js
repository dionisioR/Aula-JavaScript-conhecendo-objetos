const estudantes = require("./12-estudantes.json");
function ordena(lista, propriedade) {
  return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    } else if (a[propriedade] > b[propriedade]) {
      return 1;
    } else {
      return 0;
    }
  })
}

const listaOrdenada = ordena(estudantes, "nome");
console.log(listaOrdenada);

https://www.youtube.com/watch?v=DVlNvnjRWn4&ab_channel=SilvaneiMartins