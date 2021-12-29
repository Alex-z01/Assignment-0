function titleCaseEdit(title) {
  var titleArr = title.split(/(\s+)/);
  var t;
  var newTitle = "";

  titleArr.forEach(element => {
    t = element[0].toUpperCase() + element.substring(1);
    newTitle += t;
  });
  return newTitle;
}
titleCaseEdit("hello my friend");
// Do not edit this line;
module.exports = titleCaseEdit; 