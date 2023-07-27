var clientName = prompt("Enter your name: ");
var clientNameRe = /^([^0-9]*)$/gi;
do {
  var clientName = prompt("Enter your name: ");
  var clientNameRe = /^([^0-9]*)$/gi;
} while (!clientNameRe.test(clientName));

do {
  var clientLandline = prompt("Enter your landline: ");
  var clientLandlineRe = /^\d{8}$/gi;
} while (!clientLandlineRe.test(clientLandline));

do {
  var clientMobileNumber = prompt("Enter your mobile number: ");
  var clientMobileNumberRe = /^(01[0-2])+\d{8}$/gi;
} while (!clientMobileNumberRe.test(clientMobileNumber));

do {
  var clientEmail = prompt("Enter your email: ");
  var clientEmailRe = /^\D+(\d*\D*)*@\D+.\D+$/gi;
} while (!clientEmailRe.test(clientEmail));

var clientColor = prompt("Enter your favourite color: ");

document.write("<h1>Entering user info</h1><hr>");
document.write(
  "<h4><span style='color:" +
    clientColor +
    "'>Wlcome dear guest</span> " +
    clientName +
    "</h4>"
);

document.write(
  "<h4><span style='color:" +
    clientColor +
    "'>Your telephone number is </span> " +
    clientLandline +
    "</h4>"
);

document.write(
  "<h4><span style='color:" +
    clientColor +
    "'>Your mobile number is </span> " +
    clientMobileNumber +
    "</h4>"
);

document.write(
  "<h4><span style='color:" +
    clientColor +
    "'>Your email address is </span> " +
    clientEmail +
    "</h4>"
);
