var pictureNumber = 1;
var imageTag = document.querySelector(".container img");

function showNextImage() {
  pictureNumber = pictureNumber == 5 ? 1 : pictureNumber + 1;
  changeNewImage();
}

function showPreviesImage() {
  pictureNumber = pictureNumber == 1 ? 5 : pictureNumber - 1;
  changeNewImage();
}

function changeNewImage() {
  var imagePath = "./images/" + pictureNumber + ".jpg";
  imageTag.setAttribute("src", imagePath);
}
