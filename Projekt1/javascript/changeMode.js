const collection = document.getElementsByClassName("upper-container");

function change() {
  mode = getCookie("mode");
  if (mode == "night") {
    mode = "day";
    timeSetDay();
  } else {
    timeSetNight();
    mode = "night";
  }
  setCookie("mode", mode, 30);
  /*init();*/
}
function init() {
  mode = getCookie("mode");
  if ((mode = "")) {
    mode = "day";
    setCookie("mode", mode, 30);
  }
  if ((mode = "night")) {
    timeSetNight();
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function timeSetDay() {
  //collection[0].style.backgroundColor = "white";
}

function timeSetNight() {
  //collection[0].style.backgroundColor = "black";
}
