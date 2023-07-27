function reverseArray1() {
  var start = 0;
  var end = arguments.length - 1;
  while (start < end) {
    var temp = arguments[start];
    arguments[start] = arguments[end];
    arguments[end] = temp;
    start++;
    end--;
  }
  return arguments;
}

function reverseArray2() {
  var lastIndex = arguments.length - 1;
  var endOfLoop = Math.round(lastIndex / 2);
  for (var x = 0; x <= endOfLoop; x++) {
    var temp = arguments[x];
    arguments[x] = arguments[lastIndex - x];
    arguments[lastIndex - x] = temp;
  }
  return arguments;
}

console.log(reverseArray1(1, 2, 3));
console.log(reverseArray2(1, 2, 3));
