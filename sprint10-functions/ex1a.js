function findSquares(numbers) {
    return numbers.map(num => num * num);
  }

console.log("Patratele numerelor 6, 0, si -12 sunt ", findSquares([6, 0, -12]));
console.log("Patratele numerelor 5, 7, si 25 sunt ", findSquares([5, 7, 25]));