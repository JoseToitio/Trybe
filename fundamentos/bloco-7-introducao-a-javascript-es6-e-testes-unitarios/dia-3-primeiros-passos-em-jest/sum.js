const sum = (a, b) => {
  if (typeof a !== 'number' ||typeof b !== 'number' ) {
    throw new Error('Parameters must be numbers');
  }
  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function techList(array, name) {
  if (array.length === 0){ return 'Vazio!'}
  const arrayOrder = array.sort();
  let arrayTechList = [];
  for(let i in arrayOrder) {
    arrayTechList.push({ 
      tech: array[i],
      name: name,
    });
  }
  return arrayTechList;
}




module.exports = {sum, myRemove, myFizzBuzz, techList};