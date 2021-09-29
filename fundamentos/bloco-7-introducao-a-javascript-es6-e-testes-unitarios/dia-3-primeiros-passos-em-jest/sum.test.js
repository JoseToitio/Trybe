const {sum, myRemove, myFizzBuzz, techList} = require('./sum');

describe('The function sum()', () => {
  it('Recebe o valor 4 e 5 e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Recebe o valor 0, 0 e retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Recebe os valores 4 e "5" e retorna Erro', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  it('Recebe os valores 4 e "5" e retorna Erro em string', () => {
    expect(() => sum(4, '5')).toThrow('Parameters must be numbers');
  });
});

describe('The function myRemove()', () => {
  it('recebe myRemove([1, 2, 3, 4], 3) e retorna [1,2,4] ', () => {
    expect(myRemove([1,2,3,4],3)).toStrictEqual([1, 2, 4]);
  });

  // it('chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
  //   expect(myRemove([1,2,3,4],3)).toStrictEqual([1, 2, 3, 4]);
  // });

  it('recebe myRemove([1, 2, 3, 4], 5) e retorna [1,2,3,4] ', () => {
    expect(myRemove([1,2,3,4],5)).toStrictEqual([1, 2, 3, 4]);
  });
});

describe('The function myFizzBuzz()', () => {
  it('recebe o valor 15 e retorna: fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('recebe o valor 6 e retorna: fizz', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('recebe o valor 10 e retorna: buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('recebe o valor 2 e retorna: 2', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('recebe o valor "quatro" e retorna: fizzbuzz', () => {
    expect(myFizzBuzz('quatro')).toBe(false);
  });
});

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});