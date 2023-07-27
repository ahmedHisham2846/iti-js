var sum = 0;
do {
  var clientNumber = prompt("Enter number");
  sum += Number(clientNumber);
  var flag = sum <= 100 && Number(clientNumber) != 0;
} while (flag);

document.write("The summetion of numbers is " + sum);
