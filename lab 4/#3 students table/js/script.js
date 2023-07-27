var studentNumber = 1;
function addStudent() {
  var studentName = document.getElementById("txtStudentName").value;
  var studentAge = parseInt(document.getElementById("txtStudentAge").value);
  if (studentName.length < 3) {
    document.querySelectorAll(".error")[0].style.display = "block";
    return;
  }
  if (studentAge < 18 || isNaN(studentAge)) {
    document.querySelectorAll(".error")[1].style.display = "block";
    return;
  }
  var studentCells = getStudent(studentName, studentAge);
  var newTableRow = getNewTableRow(studentCells);
  document.querySelector("tbody").appendChild(newTableRow);
}

function deleteStudent(sender) {
  sender.parentElement.parentElement.remove();
}

function getDeletButtonCell() {
  var tableCell = document.createElement("td");
  tableCell.className = "action";
  var btnDelete = document.createElement("button");
  btnDelete.append("Delete");
  btnDelete.className = "btn-delete";
  btnDelete.setAttribute("onclick", "deleteStudent(this)");
  tableCell.appendChild(btnDelete);
  return tableCell;
}

function getNewTableRow(studentCells) {
  var newTableRow = document.createElement("tr");
  newTableRow.appendChild(studentCells.studentId);
  newTableRow.appendChild(studentCells.studentName);
  newTableRow.appendChild(studentCells.studentAge);
  newTableRow.appendChild(getDeletButtonCell());
  return newTableRow;
}

function getStudent(stdName, stdAge) {
  var studentIdCell = document.createElement("td");
  studentIdCell.append(studentNumber++);
  var studentNameCell = document.createElement("td");
  studentNameCell.append(stdName);
  var studentAgeCell = document.createElement("td");
  studentAgeCell.append(stdAge);
  return {
    studentId: studentIdCell,
    studentName: studentNameCell,
    studentAge: studentAgeCell,
  };
}
