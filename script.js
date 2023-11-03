let clock = document.getElementById("clock");
let dayStatus = document.getElementById("dayStatus");
let currentDay = document.getElementById("currentDay");

function updateClock() {
  let currentTime = new Date();
  let currenthour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentseconds = currentTime.getSeconds();
  let currentDaystatus;
  let currentMonth = currentTime.toLocaleString("en-us", {
    month: "long",
  });
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDayName = days[currentTime.getDay()];

  currentDaystatus = currenthour < 12 ? "AM" : "PM";
  currenthour = currenthour > 12 ? currenthour - 12 : currenthour;
  currenthour = currenthour == 0 ? 12 : currenthour;
  currenthour = currenthour < 10 ? "0" + currenthour : currenthour;
  currentMinute = currentMinute < 10 ? "0" + currentMinute : currentMinute;
  currentseconds = currentseconds < 10 ? "0" + currentseconds : currentseconds;

  clock.innerHTML = currenthour + ":" + currentMinute + ":" + currentseconds;

  dayStatus.innerHTML = currentDaystatus;

  currentDay.innerHTML =
    currentDayName +
    ", " +
    currentMonth +
    " " +
    currentTime.getDate() +
    ", " +
    currentTime.getFullYear();
}
