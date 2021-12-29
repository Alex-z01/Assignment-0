function frequencyCounter(word) {
  var dict = {};
  for (i = 0; i < word.length; i++)
  {
    if(dict[word[i]])
    {
      dict[word[i]]++;
    }
    else{
      dict[word[i]]=1;
    }
  }
  return dict;
}

// Do not edit this line;
module.exports = frequencyCounter;