const utcTime = document.getElementById("utcTime");
const dayOfWeek = document.getElementById("dayOfWeek");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  utcTime.textContent = now.getTime();
  dayOfWeek.textContent = days[now.getDay()];
});
