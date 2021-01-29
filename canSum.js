// takes in a targetSum and an array of nums
// returns a boolean indicating whether or not it is possible to
// generate targetSum from nums in array
// elements can be used more than once

const canSum = (targetSum, arr) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let e of arr) {
    if (canSum(targetSum - e, arr) === true) return true;
  }
  return false;
};

console.log(canSum(7, [5, 4, 3, 7]));
console.log(canSum(8, [5, 4, 3, 7]));
console.log(canSum(2, [5, 4, 3, 7]));
