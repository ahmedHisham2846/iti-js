var numbers = [];
for (var x = 1; x <= 3; x++) {
  numbers[x - 1] = Number(prompt("Enter value number " + x));
}

outPutCalculations("Sum of the three values : ", add(numbers), " + ");
outPutCalculations(
  "Multiplication of the three values : ",
  multiply(numbers),
  " * "
);
outPutCalculations("Division of the three values : ", devide(numbers), " / ");

function add(arr) {
  var sum = arr[0];
  for (var x = 1; x < arr.length; x++) {
    sum += arr[x];
  }
  return sum;
}

function multiply(arr) {
  var multi = arr[0];
  for (var x = 1; x < arr.length; x++) {
    multi *= arr[x];
  }
  return multi;
}

function devide(arr) {
  var devide = arr[0];
  for (var x = 1; x < arr.length; x++) {
    devide /= arr[x];
  }
  return devide;
}

function outPutCalculations(calculationText, result, opirator) {
  document.write("<h3><span class='red-color'>" + calculationText + "</span>");
  for (var x = 0; x < numbers.length; x++) {
    document.write(numbers[x]);
    document.write(x == numbers.length - 1 ? " = " : opirator);
  }
  document.write(result);
  document.write("</h3>");
}
