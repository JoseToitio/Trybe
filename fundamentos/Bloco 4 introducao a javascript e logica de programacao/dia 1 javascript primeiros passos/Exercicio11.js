// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salario = 5189.82;

if (salario <= 1556.94) {
    salario -= salario * 0.08;
} else if (salario >= 1556.95 && salario < 2594.92) {
    salario -= salario * 0.09;
} else if (salario >= 2594.93 && salario < 5189.82) {
    salario -= salario * 0.11;
} else if (salario > 5189.82) {
    salario -= 570.88;
}

if (salario <= 1903.98) {
    console.log(salario)
} else if (salario >= 1903.99 && salario < 2826.65) {
    salario -= (salario * 0.075) - 142.80
    console.log(salario)
} else if (salario >= 2826.66 && salario < 3751.05) {
    salario -= (salario * 0.15) - 354.80
    console.log(salario)
} else if (salario >= 3751.06 && salario < 4664.68) {
    salario -= (salario * 0.225) - 636.13
    console.log(salario)
} else if (salario > 4664.68) {
    salario -= (salario * 0.275) - 869.36
    console.log(salario)
}