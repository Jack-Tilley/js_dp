// 2d grid, can only move down and right,
// how many ways can u travel to goal with dimensions m*n

const gridTravel = (m, n, memo = {}) => {
  const key1 = m + "," + n;
  const key2 = n + "," + m;
  if (key1 in memo) return memo[key1];
  if (key2 in memo) return memo[key2];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key1] = gridTravel(m - 1, n, memo) + gridTravel(m, n - 1, memo);
  return memo[key1];
};

console.log(gridTravel(5, 5));
console.log(gridTravel(5, 4));
console.log(gridTravel(2, 4));
console.log(gridTravel(30, 20));
