

const currentYear = new Date().getFullYear();

const newYearTime = new Date("7 23, 2024 00:01");
console.log(newYearTime)

function updateCountdown(){
const currentTime = new Date();
const diff = newYearTime - currentTime;

const d = Math.floor(diff / 1000 /60 /60/ 24);
const h = Math.floor(diff / 1000 /60 /60) %24;
const m = Math.floor(diff / 1000 /60 ) %60;
const s = Math.floor(diff / 1000 ) %60;

document.getElementById("days").innerHTML = d;
document.getElementById("hours").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
document.getElementById("seconds").innerHTML = s;


}

setInterval(updateCountdown, 1000);