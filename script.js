let timer;
let isRunning = false;
let timeLeft = 25 * 60;

const pomodoroTimeDisplay = document.getElementById('pomodoro-time');
const startButton = document.getElementById('start');


function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    pomodoroTimeDisplay.textContent = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}


function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.textContent = 'stop';

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                resetTimer();
            }
        }, 1000);
    } else {
        stopTimer();
    }
}


function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    startButton.textContent = 'start';
}


function resetTimer() {
    clearInterval(timer);
    timeLeft = 25 * 60;
    updateDisplay();
    isRunning = false;
    startButton.textContent = 'start';
}


updateDisplay();


startButton.addEventListener('click', startTimer);