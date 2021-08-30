function indiceMaior(numbers) {
    let maior = 0;
    for (const key in numbers) {
        if( numbers[maior] < numbers[key]){
            maior = key;
        }
    }
    return maior
}

console.log(indiceMaior([2, 3, 6, 7, 10, 1]))
