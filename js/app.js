const   second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24,
        fireworkContainer = document.querySelector('.fireworks-container')
        newYear = document.querySelector('#year_text')

// YEAR
const y = new Date()
newYear.innerHTML = y.getFullYear()

// SET DATE NEW YEAR
//let new_year = "Jan 1, 2025 00:00:00",

// SET DATE TESTING ONLY
let new_year = "Jun 29, 2025 13:25:00"


    countDown = new Date(new_year).getTime(),
    interval = setInterval(function() {    
  
        let now = new Date().getTime(),
        distance = countDown - now;
        
        document.getElementById("digitDays").innerText = pad(Math.floor(distance / (day))),
        document.getElementById("digitHours").innerText = pad(Math.floor((distance % (day)) / (hour))),
        document.getElementById("digitMinutes").innerText = pad(Math.floor((distance % (hour)) / (minute))),
        document.getElementById("digitSeconds").innerText = pad(Math.floor((distance % (minute)) / second)),
        document.getElementById("digitSeconds_2").innerText = new_pad(Math.floor((distance % (minute)) / second));
        
		if (distance <= day){
            document.getElementById('days').style.display = "none";
        }

        if (distance <= hour){
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

    }, 0)

function pad(n) {
return (n < 10 ? '0' : '') + n;
}
            
function new_pad(x) {
return (x < 10 ? '' : '') + x;
}

const fireworks = new Fireworks(fireworkContainer, {
    speed: 20,
    acceleration: 1,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})