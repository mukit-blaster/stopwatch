const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const display = document.getElementById("display");

let [seconds, minutes, hour] = [0, 0, 0];
let timer = null;

const stopwatch = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hour++;
    }
  }

  //conditions to display in two digit
  let h = hour < 10 ? "0" + hour : hour;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = h + ":" + m + ":" + s;
};

const watchStart = () => {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
};
startBtn.addEventListener("click", watchStart);

const watchStop = () => {
  clearInterval(timer);
};
stopBtn.addEventListener("click", watchStop);

const watchReset = () => {
  clearInterval(timer);
  [seconds, minutes, hour] = [0, 0, 0];

  display.innerHTML = "00:00:00";
};
resetBtn.addEventListener("click", watchReset);
