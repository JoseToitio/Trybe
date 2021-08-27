let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
//Resposta: console.log(numbers)

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
//let soma = 0;
// Resposta: for (let index = 0; index < numbers.length; index+=1){
//     soma += numbers[index]
// }
// console.log(soma)

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// Resposta:
// let media
// let soma = 0 ;
// for (const index of numbers) {
//     soma += index;
// }
// media = soma/ numbers.length
// console.log(media)

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// Resposta: 
// let media
// let soma = 0 ;
// for (const index of numbers) {
//     soma += index;
// }
// media = soma/ numbers.length
// if (media > 20) {
//     console.log(`Valor maior que 20`)
// } else {
//     console.log(`Valor menor ou igual a 20`)
// }

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// Resposta:
// let maior = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (maior < numbers[i]) {
//         maior = numbers[i];
//     }
// }
// console.log(maior);


// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// resposta:
// let contadorImpar = 0;
// for (let index of numbers) {
//     if(index %2 != 0){
//         console.log(index)
//         contadorImpar+= 1;
//     }else{
//         console.log(`Nenhum valor ímpar encontrado`)
//     }
// }
// console.log(contadorImpar)

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let min = numbers[0]

// for (let index = 0; index < numbers.length; index++) {
//     if(min > numbers[index]){
//         min = numbers[index]
//     }
// }
// console.log(min)

// 8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// Resposta:
// let array =[]
// for (let index = 1; index <= 25; index+=1) {
//     array.push(index)
// }
// console.log(array)

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
// Resposta:
// let div;
// let array = []
// for (let index = 1; index <= 25; index += 1) {
//     array.push(index)
// }

// for (let index = 0; index < array.length; index += 1) {
//     div = array[index] / 2
//     console.log(`${array[index]}/ 2 = ${div}`)
// }