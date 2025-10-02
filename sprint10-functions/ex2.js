function getRandom(start, end) {
    return Math.floor(Math.random() * (end-start)) + start; 
}

console.log("Unul din numerele din intervalul 3-5, este: ", getRandom(3, 5));
console.log("Unul din numerele din intervalul 10-20, este: ", getRandom(10, 20));
console.log("Unul din numerele din intervalul 15-30, este: ", getRandom(15, 30));