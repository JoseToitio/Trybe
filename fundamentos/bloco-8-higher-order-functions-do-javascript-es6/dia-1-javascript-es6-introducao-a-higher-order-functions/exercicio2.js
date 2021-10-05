const numRandom = () => {
  const num = Math.floor(Math.random() * (6 - 1) + 1);
  return num;
}

const result = (number, callBack) => 
(number === callBack()) ? `você ganhou!${number}` : `você perdeu!${number}}`

console.log(result(2, numRandom))