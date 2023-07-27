var isTextDataValid = [false, false];

document
  .getElementById("txtName")
  .addEventListener("input", validateTextInput(3, 0));
document
  .getElementById("txtPassword")
  .addEventListener("input", validateTextInput(8, 1));

function validateTextInput(charLength, validationIndex) {
  return function (e) {
    if (e.target.value.length > charLength) {
      e.target.style.border = "green 2px solid";
      isTextDataValid[validationIndex] = true;
    } else {
      e.target.style.border = "red 2px solid";
      isTextDataValid[validationIndex] = false;
    }
  };
}

function isGenderValid() {
  if (!document.getElementById("female").checked)
    if (!document.getElementById("male").checked) return false;
  return true;
}

function isSportValid() {
  var numOfChecks = 0;
  var sportsCheckBoxes = document.querySelectorAll("input[type='checkbox']");
  for (var x = 0; x < sportsCheckBoxes.length; x++) {
    if (sportsCheckBoxes[x].checked) {
      numOfChecks++;
    }
  }

  if (numOfChecks < 2) return false;
  return true;
}

function isCountryValid() {
  var countries = document.getElementById("country");
  var text = countries.options[countries.selectedIndex].text;
  if (text == null) return false;
  if (text == "") return false;
  return true;
}

function isEmailValid() {
  var email = document.getElementById("txtEmail").value;
  var emailRegx =
    /^[a-zA-Z]+(\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

  if (!emailRegx.test(email)) return false;
  return true;
}

document.querySelector("form.container").onsubmit = function (e) {
  e.preventDefault();
  var validationStateBox = document.querySelector(".validation-state");
  validationStateBox.innerHTML = "";
  if (!isTextDataValid[0])
    validationStateBox.innerHTML = "Name is required<br>";
  if (!isTextDataValid[1])
    validationStateBox.innerHTML += "Password must be > 7 characters<br>";
  if (!isEmailValid()) validationStateBox.innerHTML += "Email not valid<br>";
  if (!isGenderValid())
    validationStateBox.innerHTML += "Please select gender<br>";
  if (!isSportValid())
    validationStateBox.innerHTML += "You have to select at least 2 sports<br>";
  if (!isCountryValid())
    validationStateBox.innerHTML += "You have to select your country";
};
