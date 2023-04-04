// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
function product(arrayOfNumbers){
  const length = arrayOfNumbers.length;
  let left = [];
  let right = [];

  left[0] = 1;
  right[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    left[i] = arrayOfNumbers[i - 1] * left[i - 1];
  }

  for (let j = length - 2; j >= 0; j-- ){
    right[j] = arrayOfNumbers[j + 1] * right[j + 1];
  }

  for(let k = 0; k < length; k++){
    arrayOfNumbers[k] = left[k] * right[k];
  }

  return arrayOfNumbers
}

console.log(
  product([1,2,3,4])
)