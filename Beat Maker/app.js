var audio = new Audio();
var counter = 0;
var seconds = 0.4 * 1000;
var interval;

var output = document.getElementById("output");
var playButton = document.getElementById("play-button");
var rows = document.querySelectorAll(".row");

for (var i = 0; i < rows.length; i++) {
  for (var j = 0; j < 7; j++) {
    rows[i].innerHTML += `<input type="checkbox" name="" id="" />`;
  }
}

var selectBeat = document.querySelectorAll(".select-beat");
var beats = [
  {
    name: "Clap-808",
    beat: "clap-808",
  },
  {
    name: "Hihat-Digital",
    beat: "hihat-digital",
  },
  {
    name: "Hihat-Plain",
    beat: "hihat-plain",
  },
  {
    name: "Snare-808",
    beat: "snare-808",
  },
  {
    name: "Snare-Block",
    beat: "snare-block",
  },
];

for (var i = 0; i < selectBeat.length; i++) {
  for (var j = 0; j < beats.length; j++) {
    selectBeat[i].innerHTML += `<option value="${beats[j].beat}">${beats[j].name}</option>`;
  }
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

var upBeat = "media/kick-slapback.wav";
var middleBeat = "media/kick-electro01.wav";
var downBeat = "media/snare-electro.wav";

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
    audio.src = upBeat;
    audio.play();
  }
  if (checkboxMiddle.checked) {
    audio.src = middleBeat;
    audio.play();
  }
  if (checkboxDown.checked) {
    audio.src = downBeat;
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

function changeBeat(e, number) {
  var beat = e.target.value;
  switch (number) {
    case 0:
      upBeat = "media/" + beat + ".wav";
      break;
    case 1:
      middleBeat = "media/" + beat + ".wav";
      break;
    case 2:
      downBeat = "media/" + beat + ".wav";
      break;
  }
}
