const { it, expect } = require("@jest/globals");

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Testando se transforma as letras de uma palavra em letras maiúsculas.', (done) => {
  uppercase('Baile Do Mandela', (result) => {
    try {
      expect(result).toBe('BAILE DO MANDELA')
      done();
    } catch (error) {
      done(error);
    }
  })
});