function countOfAllNumbersSmallerThanTarget(nums, target) {
  var counter = 0;
  nums.forEach(element => {
    if (element < target)
    {
      counter++;
    }
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;