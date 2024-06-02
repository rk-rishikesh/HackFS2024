window.addEventListener("resize", Resize);
Resize();
updateAchives();
updateUpgrades()


function muteMe(audio) {
  if (pageMuted) {
    audio.mute(false);
  } else {
    audio.mute(true);
  }

}

function mutePage() {
  soundBtn.classList.toggle('soundBtnOff');
  if (pageMuted) {
    [].forEach.call(audioArr, function (elem) { muteMe(elem); });
    pageMuted = false
    localStorage.setItem('pageMuted', '')
  } else {
    [].forEach.call(audioArr, function (elem) { muteMe(elem); });
    pageMuted = true
    localStorage.setItem('pageMuted', 'true')
  }
}
function autoMute(){
  soundBtn.classList.toggle('soundBtnOff');
  soundOff()

}

function soundOn() {
    [].forEach.call(audioArr, function (elem) { elem.mute(false); });
}
function soundOff() {
  [].forEach.call(audioArr, function (elem) { elem.mute(true); });
}


highScoreBlock.innerText = highScore;
mainCoinBlock.innerText = myCoins;