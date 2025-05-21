function isPrime(num) {
  if (num === 1) return false;
  let divisor = 2;
  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
}

console.log(isPrime(1) === false); // true
console.log(isPrime(2) === true); // true
console.log(isPrime(3) === true); // true
console.log(isPrime(4) === false); // true
console.log(isPrime(5) === true); // true
console.log(isPrime(6) === false); // true
console.log(isPrime(7) === true); // true
console.log(isPrime(8) === false); // true
console.log(isPrime(9) === false); // true
console.log(isPrime(10) === false); // true
console.log(isPrime(23) === true); // true
console.log(isPrime(24) === false); // true
console.log(isPrime(997) === true); // true
console.log(isPrime(998) === false); // true
console.log(isPrime(3_297_061) === true); // true
console.log(isPrime(23_297_061) === false); // true
