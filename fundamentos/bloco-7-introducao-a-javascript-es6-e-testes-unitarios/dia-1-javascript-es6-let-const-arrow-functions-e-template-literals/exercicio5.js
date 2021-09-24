const string = 'Tryber x aqui'

const find = (x) => string.includes('x')? `${string.replace('x',x)}`: `Não possui X na string`;

console.log(find('Bebeto'))