function tellFortune(x, y, z, n) {
    return "Vei fi " + x + " in " + y + ", casatorit cu " + z + " si vei avea " + n + " copii.";
}

const x="Programator";
const y="Italia";
const z="Emanuel";
const n= 3;

console.log(tellFortune(x, y, z, n));
console.log(tellFortune("Programator","Italia", "Emanuel", 3));