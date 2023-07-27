var str = prompt("Enter your text: ");
var countOfLetterE = 0;
for (var index = 0; index < str.length; index++) {
  if (str[index] == "e" || str[index] == "E") {
    countOfLetterE++;
  }
}

document.write("The count of letter 'e' is : " + countOfLetterE);
