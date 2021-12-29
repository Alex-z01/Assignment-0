function setUnionOfAnyAmountOfSets(...args) {
  let setOBJ = new Set();
  for (set of args)
  {
    for (num of set)
    {
      setOBJ.add(num);
    }
  }
  return setOBJ;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;