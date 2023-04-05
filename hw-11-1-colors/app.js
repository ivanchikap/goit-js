const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.body;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      console.log('Програ активована, не можна ще раз');
      return;
    }

    this.intervalId = setInterval(() => {
      const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
      body.style.backgroundColor = randomColor;
    }, 1000);
    this.isActive = true;
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  }
}

function setRandomColor() {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

startBtn.addEventListener('click', randomColor.start.bind(randomColor));
stopBtn.addEventListener('click', randomColor.stop.bind(randomColor));