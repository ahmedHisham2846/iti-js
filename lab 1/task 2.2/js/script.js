var clientStr = prompt("Enter your text: ");
var isConsiderCaseSensitivity = confirm(
  "Are you consider case sensitivity of the entered text?"
);

if (isConsiderCaseSensitivity) {
  document.write(isStringPalindrome(clientStr));
} else {
  clientStr = clientStr.toLocaleLowerCase();
  document.write(isStringPalindrome(clientStr));
}

function isStringPalindrome(str) {
  if (str === revrseString(str)) {
    return "Text is palindrome";
  } else {
    return "Text is not palindrome";
  }
}

function revrseString(str) {
  var stringArray = str.split("");
  var reversedArray = stringArray.reverse();
  return reversedArray.join("");
}
