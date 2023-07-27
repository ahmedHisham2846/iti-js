var alertBox = document.querySelector(".alert-box");
function showSuccessAlert() {
  alertBox.querySelectorAll("*").forEach((element) => {
    element.remove();
  });
  var span = document.createElement("span");
  span.className = "succes";
  span.innerText = "Successful alert";
  alertBox.appendChild(span);
}
function showErroeAlert() {
  alertBox.querySelectorAll("*").forEach((element) => {
    element.remove();
  });
  var span = document.createElement("span");
  span.className = "error";
  span.innerText = "Error alert";
  alertBox.appendChild(span);
}
