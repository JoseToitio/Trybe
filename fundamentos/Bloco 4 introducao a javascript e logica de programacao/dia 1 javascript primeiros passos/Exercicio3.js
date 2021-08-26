//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
let a = 50;
let b = 30;
let c = 400;

if (a>b && a>c){
    console.log("A Maior numero:",a)
}else if (b>a && b>c){
    console.log("B Maior numero:",b)
}else{
    console.log(`${c} é o C`)
}