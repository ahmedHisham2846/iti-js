function myFun(arg1, arg2) {
  if (arguments.length > 2) throw "outOfRangeExeption";
  return `first argument : ${arg1}; second argument ${arg2}`;
}

console.log(myFun("Ahmed", "Hisham", 333)); // throw exeption