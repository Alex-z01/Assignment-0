function countOfAllBooleans(arr) {
  var counter = 0;
  arr.forEach(element => {
    if(typeof element == "boolean")
    {
      counter++;
    }
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;