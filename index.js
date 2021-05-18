const refs = {
  startBtn: document.querySelector(".js-start"),
  stopBtn: document.querySelector(".js-stop"),
  body: document.querySelector("body"),
};

refs.startBtn.addEventListener("click", ChangeBgColor);
refs.stopBtn.addEventListener("click", stopChangeBgColor);

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let isChangeBgColorStarting = false;
let intervalId = null;

function ChangeBgColor() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.startBtn.disabled = true;
}

function stopChangeBgColor() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
