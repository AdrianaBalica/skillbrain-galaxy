function letterCount(sir, litera) {
    return sir
        .toLowerCase()
        .split('')
        .filter(c => c === litera.toLowerCase())
        .length;
}

console.log("Litera a este prezenta in text de " + letterCount("Îmi place programarea", "a") + " ori.");
console.log("Litera r este prezenta in text de " + letterCount("Vreau sa lucrez in IT", "r") + " ori.");
console.log("Litera c este prezenta in text de " + letterCount("Cartea aceasta este incredibila", "c") + " ori.");