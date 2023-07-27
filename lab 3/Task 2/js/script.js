var text = prompt("Enter your text: ", "Enter text here");
document.write("Your entered text : " + text + "<br>");
var wordsArr = text.split(" ");
for (var x = 0; x < wordsArr.length; x++) {
  // wordsArr[x][0] = wordsArr[x][0].toUpperCase();

  wordsArr[x] = wordsArr[x].replace(
    wordsArr[x][0],
    wordsArr[x][0].toUpperCase()
  );
}
text = wordsArr.join(" ");
document.write("Changed text : " + text);
