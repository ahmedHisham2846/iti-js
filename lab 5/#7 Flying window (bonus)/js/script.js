var marage7Data = {
  x: 0,
  y: 0,
  width: 250,
  height: 250,
  movementPoints: 10,
};
var marage7Window;

function loadPage() {
  marage7Window = open(
    "marage7.html",
    "myWindow", `height=${marage7Data.height},width=${marage7Data.width}`
  );
  startMovingMarage7(document.querySelector(".btn"));
}

var marage7Interval;
function startMovingMarage7(element) {
  marage7Interval = setInterval(function () {
    if (marage7Data.y >= screen.availHeight - marage7Data.height)
      marage7Data.movementPoints *= -1;
    marage7Data.x += marage7Data.movementPoints;
    marage7Data.y += marage7Data.movementPoints;
    marage7Window.moveBy(
      marage7Data.movementPoints,
      marage7Data.movementPoints
    );
    if (marage7Data.y < 1) marage7Data.movementPoints *= -1;
  }, 100);
  element.innerText = "Stop";
  marage7Window.focus();
}

function moveMarage7Window(e) {
  console.log(e.target);
  if (e.target.innerText == "Stop") stopMovingMarage7(e.target);
  else startMovingMarage7(e.target);
}

function stopMovingMarage7(element) {
  setTimeout(() => {
    clearInterval(marage7Interval);
  }, 10);
  marage7Window.focus();
  element.innerText = "Start";
}
