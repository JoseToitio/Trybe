function isPalindromo(word) {
    for (const key in word) {
        if (word[key] == word[(word.length - 1) - key]) {
            return true;
        } else {
            return false; 
        }
    }
}

console.log(isPalindromo('Jose'))
