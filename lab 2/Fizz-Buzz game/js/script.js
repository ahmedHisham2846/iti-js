var number = Number(prompt("Enter number :"));
var output = "";
if (number % 3 == 0) output = "Fizz";
if (number % 5 == 0) output += " Buzz";

document.write(output == null ? "none" : output);
