var radius = Number(
  prompt("Enter the value of a circle’s radius :", "Enter radius here")
);
// var radius = 5;
var area = Math.PI * Math.pow(radius, 2);
alert("Total area of the circle is " + area);

var numToCalcSqrt = prompt(
  "What is the value you want to calculate its squere root?"
);
alert("Squere root of " + numToCalcSqrt + " is " + Math.sqrt(numToCalcSqrt));

var angle = prompt("What is the angle you want to calculate its COS value?");
document.write("COS " + angle + " is " + Math.round(Math.cos(angle)));