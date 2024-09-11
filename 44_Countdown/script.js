// Intermediate Level 🔥

// Set Interval

// You are tasked with creating a countdown timer using JavaScript and the setInterval function. The countdown timer should start at 1 minute(60 seconds) and update every second until it reaches 00:00. When the countdown reaches zero, an alert should pop up to notify that the countdown is completed.

const timerElement = document.getElementById("timer");

let countdownSeconds = 60;

function updateTimerDisplay() {
  const minutes = Math.floor(countdownSeconds / 60);
  const seconds = countdownSeconds % 60;

  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, 0)}`;

  timerElement.textContent = formattedTime;
}

function countdown() {
  if (countdownSeconds > 0) {
    countdownSeconds--;
    updateTimerDisplay();
  } else {
    clearInterval(timerInterval);
    alert("Countdown Complete 🔥❤️‍🔥");
  }
}

updateTimerDisplay();

const timerInterval = setInterval(countdown, 1000);
