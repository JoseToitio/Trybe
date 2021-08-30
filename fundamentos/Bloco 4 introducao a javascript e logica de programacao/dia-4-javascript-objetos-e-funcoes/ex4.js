function nomeMaior (names){
    let tamanho = names[0];
    for (const key in names) {
        if(names[tamanho.length] < names[key.length]){
            tamanho = names[key]
        }
    }
    return tamanho
}

console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

