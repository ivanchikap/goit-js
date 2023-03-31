const btnStart = document.querySelector('.btn-start');
const btnEnd = document.querySelector('.btn-end');

const clockfaceRef = document.querySelector('.clockface');




const timer = { 
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();

      const deltaTime = currentTime - startTime;
      updateClockFace(deltaTime);
    }, 1000);
  },
  stop() {    
    clearInterval(this.intervalId);
    this.intervalId = null;
    updateClockFace(0);
    this.isActive = false;
  }
};



function updateClockFace(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  clockfaceRef.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

btnStart.addEventListener('click', timer.start.bind(timer));
btnEnd.addEventListener('click', timer.stop.bind(timer));
