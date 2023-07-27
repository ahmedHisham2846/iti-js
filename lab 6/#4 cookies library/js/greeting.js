function getCookie(key) {
  return allCookieList()[key];
}

function setCookie(key, value, date) {
  if (date == undefined) document.cookie = `${key}=${value}`;
  else document.cookie = `${key}=${value};expires=${date}`;
}

// function to get all cookies in associative array
function allCookieList() {
  var allKookies = [];
  var kookies = document.cookie.split(";");
  for (var i = 0; i < kookies.length; i++) {
    var oneCookie = kookies[i].split("=");
    allKookies[oneCookie[0].trim()] = oneCookie[1];
  }
  return allKookies;
}

function deleteCookie(keyToDelete) {
  var cookies = allCookieList();
  for (key in cookies) {
    if (key == keyToDelete) document.cookie = key + "=;" + new Date();
  }
}

function hasCookie(keyToSearch) {
  var cookies = allCookieList();
  for (key in cookies) {
    if (key == keyToSearch) return true;
  }
  return false;
}
// -------------------------------------------------------

if (!hasCookie("name")) location.assign("index.html");
var numOfVisiting = Number(getCookie("visited"));
document.images[0].src =
  getCookie("gender") == "male" ? "./images/1.jpg" : "./images/2.jpg";
document.getElementsByTagName(
  "label"
)[0].innerHTML = `Welcome <span style='color: ${getCookie(
  "color"
)};'>${getCookie(
  "name"
)}</span> you have visited this page ${numOfVisiting++} times :)`;
setCookie("visited", numOfVisiting);
