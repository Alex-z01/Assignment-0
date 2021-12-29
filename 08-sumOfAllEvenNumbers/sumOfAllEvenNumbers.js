function sumOfAllEvenNumbers(nums) {
  var sum = 0;
  var counter = 0;
  nums.forEach(element => {
    if(element % 2 == 0)
    {
      counter++;
    }
  });
  return counter++;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;