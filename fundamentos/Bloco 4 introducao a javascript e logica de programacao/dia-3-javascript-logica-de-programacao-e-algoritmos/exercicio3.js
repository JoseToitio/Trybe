let n = 5;
let asterisco = '*';
let quebraDeLinha = '';
let espacamento = n;
for (let index = 1; index <= n; index += 1) {
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
        if (colunaIndex < espacamento) {
            quebraDeLinha = quebraDeLinha + ' ';
        } else {
            quebraDeLinha = quebraDeLinha + asterisco;
        }
    }
    console.log(quebraDeLinha)
    quebraDeLinha = ''
    espacamento -= 1;
}