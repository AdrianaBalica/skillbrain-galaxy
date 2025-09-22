const numbers = [1, -5, 20, -34, 16, 29, 36, -4];

const suma = numbers.reduce((total, num) => total + num, 0);

console.log("Suma elementelor + numbers =  " + suma); 

const numbers1 = [3.45, -2.68, 356, -75.96, 64, 19.28];

function sumaNumerelor(total, num) {
    return total + num;
}
const first = numbers1.reduce(sumaNumerelor, 0);

console.log("Suma elementelor este " + first);
