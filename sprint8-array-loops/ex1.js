function getNrPare(n) {
    let i = 0;
    let rezultat = [];

    while (i <= n) {
        rezultat.push(i);
        i += 2;
    }

    return rezultat;
}

console.log("Numerele pare până la 10: " + getNrPare(10).join(", "));
console.log("Numerele pare până la 15: " + getNrPare(15).join(", "));
console.log("Numerele pare până la 20: " + getNrPare(20).join(", "));