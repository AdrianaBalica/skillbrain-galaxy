function nrPare() {
    let i = 0;
    let numere = [];

    while (i<=10) {
        numere.push (i);
        i += 2;
    }

    return numere;
}

console.log (nrPare(10));
