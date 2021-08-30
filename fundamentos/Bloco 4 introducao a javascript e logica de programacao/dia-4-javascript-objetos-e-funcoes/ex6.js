function somatoria (numeros){
    let soma = 0;
    for (let index = 0; index <= numeros; index+=1) {
        soma += index;
    }
   return soma;
}

console.log(somatoria(5))