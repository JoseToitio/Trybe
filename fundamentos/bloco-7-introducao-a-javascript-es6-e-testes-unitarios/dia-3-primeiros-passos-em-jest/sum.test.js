const sum = require('./sum');

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