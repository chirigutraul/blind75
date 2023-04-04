function maxSub (nums) {
  let largestSumSubarray = [];

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      largestSumSubarray.push(currentSum);
    }
  }

  return largestSumSubarray
}

console.log(maxSub[1])
console.log(maxSub[-2,1,-3,4,-1,2,1,-5,4])
console.log(maxSub[5,4,-1,7,8])
