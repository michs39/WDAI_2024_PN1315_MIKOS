myInterval;
seconds;
minutes;
hours;

function stoper() {
  if (minutes == 0) {
    document.getElementById("czas").innerHTML = seconds.toString() + "s";
  } else {
    document.getElementById("czas").innerHTML =
      minutes.toString() + "min " + seconds.toString() + "s";
  }
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
}

function startStoper() {
  myInterval = setInterval(stoper, 1000);
}

function stopStoper() {
  clearInterval(myInterval);
}

function resetStoper() {
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("czas").innerHTML = "0s";
}
