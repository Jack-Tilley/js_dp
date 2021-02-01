// takes in targetSum and nums
// returns an array containing any comb of eles that add up to target sum
// if none return null
// only return one

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const res = howSum(targetSum - num, numbers, memo);
    if (res !== null) {
      memo[targetSum] = [...res, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [5, 4, 3, 7, 7]));
console.log(howSum(8, [5, 4, 3, 7]));
console.log(howSum(2, [5, 4, 3, 7]));
console.log(howSum(300, [7, 14]));
