var numbers = [];
for (var x = 1; x <= 5; x++) {
  numbers[x - 1] = Number(prompt("Enter value number " + x));
}

outPutArrays("You have entered the values of : ", numbers);
outPutArrays(
  "You values after being sorted descending : ",
  numbers.sort(function (a, b) {
    return b - a;
  })
);
outPutArrays(
  "You values after being sorted ascending : ",
  numbers.sort(function (a, b) {
    return a - b;
  })
);

function outPutArrays(arrayDescription, arr) {
  document.write("<h3><span class='red-color'>" + arrayDescription + "</span>");
  for (var x = 0; x < arr.length; x++) {
    document.write(arr[x]);
    document.write(x == numbers.length - 1 ? "" : ", ");
  }
  document.write("</h3>");
}
