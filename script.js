const timer = document.getElementById('timer');
const startBtn = document.querySelector(".startBtn");
const pauseBtn = document.querySelector(".pauseBtn");
const resetBtn = document.querySelector(".resetBtn");
const timerAudio = document.getElementById('timer-audio');

let timerID;
let timeleft = 25*60;
let isRunning = false;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const paddedSeconds = seconds.toString().padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}
function updateDispay(){
    timer.textContent = formatTime(timeleft);
}
function startTimer(){
    if(isRunning){
        return;
    }
    isRunning = true;
    timerID = setInterval(()=>{
        if(timeleft > 0){
            timeleft--; 
            updateDispay();
        }
        else{
            clearInterval(timerID);
            timerAudio.play();
            isRunning = false; 
        }
    },1000);
}
function pauseTimer(){
    clearInterval(timerID);
    isRunning = false;
}
function resetTimer(){  
    clearInterval(timerID);
    timeleft = 25*60;
    updateDispay();
    isRunning = false;
}
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateDispay();