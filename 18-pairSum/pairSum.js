function pairSum(nums, target) {
  var bool = false;
  if(nums.length <= 1)
  {
    console.error(e);
  }

  nums.forEach(num1 => {
    nums.forEach(num2 => {
      if(num1 + num2 == target)
      {
        bool = true;
      }
    });
  });
  return bool;
}

// Do not edit this line;
module.exports = pairSum;