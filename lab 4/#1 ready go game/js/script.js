function changeState() {
  var input = document.getElementById("txtState");
  var state = input.value; 
  if (state == "1") ready();
  else if (state == "2") steady();
  else if (state == "3") go();
  else if (state == "") return;
  else input.value = "";
}

function ready() {
  removeCilclesClasses();
  var readyCircle = document.getElementById("ready");
  readyCircle.setAttribute("class", "ready");
}
function steady() {
  removeCilclesClasses();
  var steadyCircle = document.getElementById("steady");
  steadyCircle.setAttribute("class", "steady");
}
function go() {
  removeCilclesClasses();
  var steadyCircle = document.getElementById("go");
  steadyCircle.setAttribute("class", "go");
}

function removeCilclesClasses() {
  var circles = document.querySelectorAll(".row .circles span");
  for (var x = 0; x < circles.length; x++) circles[x].removeAttribute("class");
}
