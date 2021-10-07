const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  let cont = 0;
  names.reduce((result, atualName) => {
    return result + atualName.split('').reduce((_acumulador, atual) => {
      if (atual === 'a' || atual === 'A') {
        cont += 1;
      }
    }, '');
  }, '')

  return cont
}


console.log(containsA())