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

function getClient(name, isMale, color) {
  return {
    clientName: name,
    clientColor: color,
    isClientMale: isMale,
  };
}

function register() {
  var colors = document.getElementById("colors");
  var client = getClient(
    document.getElementById("txtName").value,
    document.getElementById("Male").checked,
    colors.options[colors.selectedIndex].text
  );
  setCookie("name", client.clientName);
  setCookie("gender", client.isClientMale ? "male" : "female");
  setCookie("color", client.clientColor);
  setCookie("visited", 1);
  location.assign("greeting.html");
}
