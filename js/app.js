const   second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        fireworkContainer = document.querySelector('.fireworks-container'),
        newYear = document.querySelector('#year_text');

// Set the target new year date
let new_year = "Jan 1, 2025 00:00:00",
    comingYear = new Date(new_year).getFullYear();
newYear.innerHTML = comingYear;

const countDown = new Date(new_year).getTime();

const interval = setInterval(function () {
    let now = new Date().getTime(),
        distance = countDown - now;

    // Update Countdown Display
    document.getElementById("digitDays").innerText = pad(Math.floor(distance / day));
    document.getElementById("digitHours").innerText = pad(Math.floor((distance % day) / hour));
    document.getElementById("digitMinutes").innerText = pad(Math.floor((distance % hour) / minute));
    document.getElementById("digitSeconds").innerText = pad(Math.floor((distance % minute) / second));
    document.getElementById("digitSeconds_2").innerText = new_pad(Math.floor((distance % minute) / second));

    // Hide elements when time reaches a certain point
    if (distance <= day) {
        document.getElementById('days').style.display = "none";
    }

    if (distance <= hour) {
        document.getElementById('hours').style.display = "none";
    }

    if (distance <= minute) {
        document.getElementById("full").style.display = "none";
        document.getElementById("half").style.display = "block";
        document.getElementById("capTextSpawn").style.display = "none";
    }

    if (distance <= 0) {
        document.getElementById("textSpawn").style.display = "block";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("year_text").style.display = "block";
        document.getElementById("half").style.display = "none";
        fireworks.start();
        clearInterval(interval);
    }

}, 0);

// Function to pad the number
function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

function new_pad(x) {
    return (x < 10 ? '' : '') + x;
    }

// Initialize Fireworks
const fireworks = new Fireworks(fireworkContainer, {
    speed: 15,
    acceleration: 1,
    friction: 1,
    gravity: 1,
    particles: 400,
    explosion: 10
});
