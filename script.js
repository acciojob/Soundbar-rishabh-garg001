//your JS code here. If required.
const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");
let currentAudio = null;

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    currentAudio = new Audio("sounds/" + btn.innerText + ".mp3");
    currentAudio.play();
  });
});

stopBtn.addEventListener("click", stopSound);