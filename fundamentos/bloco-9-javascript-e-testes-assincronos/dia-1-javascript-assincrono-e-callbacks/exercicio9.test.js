// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("@jest/globals");
const { measureMemory } = require("vm");
const { getPokemonDetails } = require("./exercicio8");
const findPokemon = (pokemon) => {pokemon.name === 'Charmander'}
const doneAndError = (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
  }
}
describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const erro = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(erro);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    function callback(error, result) {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});