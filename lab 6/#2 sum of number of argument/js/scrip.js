function myFun() {
  if (arguments.length == 0) throw "noArgumentsExeption";
  sum = 0;
  for (var x = 0; x < arguments.length; x++) {
    if (typeof arguments[x] == "number") sum += arguments[x];
    else throw "ArgumentNotANumberExeption";
  }
  return sum;
}

console.log(myFun(3, 3, 5, 6, 2, 4, 4, 2, 3, 6));
