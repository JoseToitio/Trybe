function indiceMenor(numbers) {
    let menor = 0;
    for (const key in numbers) {
        if (numbers[menor] > numbers[key]) {
            menor = key;
        }
    }
    return menor;
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]))