const clock = document.querySelector("#clock");
const days = document.querySelector("#days");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
  days.innerText = `${month}/${day}`;

  setTimeout(getClock, 1000);
}

getClock();
