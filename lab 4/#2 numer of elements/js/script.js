function showResult() {
  var strChild = `${getElementValueById("txtTagName")}: ${retriveNumOfSameTag(
    getElementValueById("txtTagName")
  )}, `;
  strChild += `${getElementValueById("txtClassName")}: ${retriveNumOfSameClass(
    getElementValueById("txtClassName")
  )}`;
  strChild += `${getElementValueById("txtID")}: ${
    false || Boolean(checkIfIdFound(getElementValueById("txtID")))
  }, `;
  strChild += `${getElementValueById("txtName")}: ${retriveNumOfSameName(
    getElementValueById("txtName")
  )}`;
  var strNode = document.createTextNode(strChild);
  document.getElementById("result").appendChild(strNode);
}

function getElementValueById(id) {
  return document.getElementById(id).value;
}
function retriveNumOfSameTag(tag) {
  return document.querySelectorAll(tag).length;
}
function retriveNumOfSameClass(strClass) {
  return document.querySelectorAll("." + strClass).length;
}
function retriveNumOfSameName(strClass) {
  return document.querySelectorAll("[name='" + strClass + "']").length;
}
function checkIfIdFound(id) {
  return document.getElementById(id) || false;
}
