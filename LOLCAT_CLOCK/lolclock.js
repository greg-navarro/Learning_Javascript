// assign variables to components
// clock display
var clock = document.getElementById("clockDisplay");
// alarm
var alarmButton = document.getElementById("setAlarm");
var stopAlarmButton = document.getElementById("stopAlarm");
var alarmHr = document.getElementById("alarmHr");
var alarmMin = document.getElementById("alarmMin");
var alarmSec = document.getElementById("alarmSec");
// image
var image = document.getElementById("catImage");

// Build alarm functionality
// alarm set
let alarmSound = new Audio("https://freesound.org/data/previews/519/519177_4753243-lq.mp3");
alarmButton.addEventListener("click", function() {
  setAlarm();
});
stopAlarmButton.addEventListener("click", function() {
  stopAlarm();
});
let checkAlarm = false;
let hr = alarmHr.innerText;
let min = alarmMin.innerText;
let sec = alarmSec.innerText;

function setAlarm() {
  // Todo validate input
  checkAlarm = true;
  hr = alarmHr.value;
  min = alarmMin.value;
  sec = alarmSec.value;
  console.log(hr + min + sec);
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
}

function updateTime() {
  let dateTimeObj = new Date();
  let currentHr =  (dateTimeObj.getHours() % 13) + 1;
  let currentMin = dateTimeObj.getMinutes();
  let currentSec = dateTimeObj.getSeconds();
  let newTime = currentHr + ":" + currentMin + ":" + currentSec; 
  clock.innerText = newTime;
  console.log("check Alarm is " + checkAlarm);
  if (checkAlarm) {
    console.log("The current hour is " + currentHr + " the alarm is " + hr + ":" + min + ":" + sec);
    // if new time is alarm time then 
    if (currentHr == hr || currentHr == dateTimeObj.getHours()) {
      console.log("hr matches");
      if (currentMin == min) {
        console.log("min matches");
        if (currentSec == sec) {
          console.log("min matches");
          // sound alarm
          // let alarmSound = new Audio("https://freesound.org/data/previews/519/519177_4753243-lq.mp3");
          alarmSound.play();
          // turn off alarm and reset alarm
          checkAlarm = false;
        }
      }
    }
     
  }
}

// Start the clock
setInterval(function(){ updateTime(); }, 1000);


function testAlarm() {
  let dateTimeObj = new Date();
  hr = dateTimeObj.getHours();
  min = dateTimeObj.getMinutes() + 1;
  sec = dateTimeObj.getSeconds();
  
  if (min === 60) {
    min = 0;
    hr = (hr + 1) % 24;
  }
  checkAlarm = true;
}
