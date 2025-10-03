alert("Dont forget to click the button for the animation effect...")
            // ------> Identifying HTML elements <------ //
const display = document.getElementById('display');
const start_button = document.getElementById('start_button');
const reset_button = document.getElementById('reset_button');


            // -----> Defining Variables <----- //
let timerId;
let elaspedTime = 0;
let startTime = 0;
let isRunning = false;


            // -----> Function for updating the text display to match the stopwatch reading
function updateDisplay() {
    const totalMilliseconds = elaspedTime;
    const hour = Math.floor(totalMilliseconds / 3600000);
    const minutes = Math.floor(totalMilliseconds / 60000);
    const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

    const formattedHours = String(hour).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMiilliseconds = String(milliseconds).padStart(2, '0');

    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMiilliseconds}`;    // <---- This will update the display with above calculations
}

            // ------> Start/Stop the stopwatch
function startTimer() {
    if (isRunning) {

        isRunning = false;
        clearInterval(timerId);
    } else {
        isRunning = true;
        startTime = Date.now() - elaspedTime

        timerId = setInterval(() => {
            elaspedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

        // -----> Reset the stopwatch
function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    elaspedTime = 0;
    isRunning = false;
    updateDisplay();
}

        // -----> When you click the start/stop or reset button, carries out the called functions...
start_button.addEventListener('click', startTimer);

reset_button.addEventListener('click', resetTimer);
