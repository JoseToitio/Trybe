let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.push(45, 27, 57, 1330, 560, 800, 200, 70, 945, 54)

for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position; 
        }
    }
}

console.log(numbers)