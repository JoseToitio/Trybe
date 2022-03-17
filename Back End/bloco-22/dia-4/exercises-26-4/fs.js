const fs = require('fs/promises');

const getSimpsonsFs = () => {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then(fileContent => JSON.parse(fileContent));
}

const setSimpsonsFs = (simpsons) => {
  return fs.writeFile('./simpsons.json', JSON.stringify(simpsons))
}

module.exports = {getSimpsonsFs, setSimpsonsFs};