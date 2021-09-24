const number = 5;

const fatorial = (number) => ((number === 0) ? (1): number * fatorial(number-1) );

console.log(fatorial(number));