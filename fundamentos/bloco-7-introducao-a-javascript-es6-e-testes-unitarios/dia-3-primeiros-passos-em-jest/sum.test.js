const {sum, myRemove} = require('./sum');

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