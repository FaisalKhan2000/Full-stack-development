let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("sec").textContent = "00";
  document.getElementById("count").textContent = "00";
  document.getElementById("min").textContent = "00";
  document.getElementById("hr").textContent = "00";
}

function stopwatch() {
  if (timer === true) {
    count = count + 1;

    if (count === 100) {
      sec = sec + 1;
      count = 0;
    }

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }

    if (min === 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let countString = count;
    let secString = sec;

    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }

    document.getElementById("sec").textContent = secString;
    document.getElementById("count").textContent = countString;
    document.getElementById("min").textContent = minString;
    document.getElementById("hr").textContent = hrString;
    setTimeout("stopwatch()", 10);
  }
}
