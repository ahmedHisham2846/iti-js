var txtTagName = document.getElementById("txtTagName");
var txtColor = document.getElementById("txtColor");
var txtText = document.getElementById("txtText");

function createNewElement() {
    // console.log(checkIfNullOrEmpty(txtTagName.value)); 
  if (
    checkIfNullOrEmpty(txtTagName.value) ||
    checkIfNullOrEmpty(txtColor.value) ||
    checkIfNullOrEmpty(txtText.value)
  ) {
    alert("Your data is not valid!");
    return;
  }

  var newTag = getNewTag();
  document.getElementById("neweElements").appendChild(newTag);
}

function getNewTag() {
  var newTag = document.createElement(txtTagName.value);
  newTag.setAttribute("style", "color:" + txtColor.value + ";");
  var newText = document.createTextNode(txtText.value);
  newTag.appendChild(newText);
  return newTag;
}

function checkIfNullOrEmpty(str) {
  if (str == null) return true;
  if (str == "") return true;
  return false;
}
