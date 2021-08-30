function fimDaPalavra(palavra1, palavra2) {
    controle = true;
    for (let index = 0; index < palavra2.length; index += 1) {
        if (palavra1[palavra1.length - palavra2.length + index] != palavra2[index]) {
            controle = false;
        }
    }
    return controle;
}


console.log(fimDaPalavra('trybe', 'be'));
console.log(fimDaPalavra('joaofernando', 'fernan'));
