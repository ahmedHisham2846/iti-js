function displayStudentsData() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        jsObj = JSON.parse(xhr.responseText);
        displayData(jsObj);
      }
    }
  };

  xhr.open("GET", "./js/students.json");
  xhr.send("");
}

function displayData(data) {
  var tableBody = document.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = "";
  for (var x = 0; x < data.length; x++) {
    tableBody.innerHTML +=
      `<tr><td>${jsObj[x].name}</td>` +
      `<td>${jsObj[x].age}</td>` +
      `<td>${jsObj[x].department}</td></tr>`;
  }
}
