let memo = {1: 1, 2: 1};
function fibonacci(num) {
  if (num < 3) return 1;
  if (memo[num]) return memo[num];
  memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return memo[num];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
 console.log(fibonacci(5)); // 5
 console.log(fibonacci(12)); // 144

console.log(fibonacci(20)); // 6765
console.log(fibonacci(60)); // 6765
