function addNumber(...numere) {
    return numere.reduce((total, numar) => total + numar, 0);
}

console.log("Suma numerelor este ", addNumber(1, 2, 3));
console.log("Suma numerelor este ", addNumber(1, 2, 3, 4, 5));
console.log("Suma numerelor este ", addNumber(15, 26, 89));
console.log("Suma numerelor este ", addNumber(124, 256, 345));