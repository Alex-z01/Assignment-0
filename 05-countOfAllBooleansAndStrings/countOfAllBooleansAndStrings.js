function countOfAllBooleansAndStrings(arr) {
  var counter = 0;
  arr.forEach(element => {
    if(typeof element == "boolean" || typeof element == "string")
    {
      counter++;
    }
  });
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;