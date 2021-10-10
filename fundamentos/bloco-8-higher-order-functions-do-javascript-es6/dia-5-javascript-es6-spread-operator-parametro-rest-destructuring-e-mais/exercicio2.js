//- Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

function sum (...elements) {
  return elements.reduce((acc, element) => (acc + element), 0);
}

console.log(sum(1, 3, 5))
