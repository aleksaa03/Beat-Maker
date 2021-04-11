var audio = new Audio();
var counter = 0;
var seconds = 0.4 * 1000;
var interval;

var output = document.getElementById("output");
var playButton = document.getElementById("play-button");
var rows = document.querySelectorAll(".row");

for (var i = 0; i < rows.length; i++) {
  rows[i].innerHTML += `
    <input type="checkbox" name="" id="" />
    <input type="checkbox" name="" id="" />
    <input type="checkbox" name="" id="" />
    <input type="checkbox" name="" id="" />
    <input type="checkbox" name="" id="" />
    <input type="checkbox" name="" id="" />
    <input type="checkbox" name="" id="" />`;
}

function start(status) {
  if (status) {
    interval = setInterval(playBeatMaker, seconds);
    playButton.disabled = true;
  } else {
    clearInterval(interval);
    output.innerHTML = "Index: " + 0;
    counter = 0;
    playButton.disabled = false;
  }
}

function playBeatMaker() {
  counter++;
  var checkboxUp = document.querySelector(`.row-1 input:nth-child(${counter})`);
  var checkboxMiddle = document.querySelector(`.row-2 input:nth-child(${counter})`);
  var checkboxDown = document.querySelector(`.row-3 input:nth-child(${counter})`);
  output.innerHTML = "Index: " + counter;

  if (counter == 8) {
    counter = 0;
  }

  if (checkboxUp.checked) {
    audio.src = "media/kick-slapback.wav";
    audio.play();
  }
  if (checkboxMiddle.checked) {
    audio.src = "media/kick-electro01.wav";
    audio.play();
  }
  if (checkboxDown.checked) {
    audio.src = "media/snare-electro.wav";
    audio.play();
  }
}

function beatIntervalSeconds(e) {
  var inputValue = e.target.value;
  if (inputValue != "" && inputValue > -1) {
    seconds = inputValue * 1000;
  } else {
    seconds = 0.4 * 1000;
  }
}
