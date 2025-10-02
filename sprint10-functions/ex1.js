function findSquare(num) {
    return [num].map(x => x**2)[0];
}

console.log("Patratul numarului 6 este ", findSquare(6));
console.log("Patratul numarului 0 este ", findSquare(0));
console.log("Patratul numarului 0 este ", findSquare(-12));