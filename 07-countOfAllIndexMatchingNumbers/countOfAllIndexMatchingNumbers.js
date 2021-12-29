function countOfAllIndexMatchingNumbers(nums) {
  var index = 0;
  var counter = 0;
  nums.forEach(element => {
    if (element == index)
    {
      counter++;
    }
    index++;
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;