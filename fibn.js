// input the nth number of the fib sequence
// output that number in the fib sequence ie 1 : 1, 2:2 3:3 4:5
// const memo = {1:1, 2:2}
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  else {
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  }
};

console.log(fib(1));
console.log(fib(5));
console.log(fib(7));
