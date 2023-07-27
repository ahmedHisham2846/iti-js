var clientText = prompt("Enter your text :");
var char = prompt("Enter your char: ");

var firstIndex = clientText.indexOf(char);
var lastIndex = clientText.lastIndexOf(char);
var indecees = [firstIndex++];
for (var x = 1; firstIndex <= lastIndex; firstIndex++) {
  if (clientText[firstIndex] == char) {
    indecees[x++] = firstIndex;
  }
}

document.write("[" + indecees + "]");
