const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')
const xmas = '25 Dec 2020';

const countdown = () => {
    const xmasDate = new Date(xmas);
    const currentDate = new Date();

    const totalSeconds = (xmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60); 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = timeFormater(hours);
    minutesEl.innerHTML = timeFormater(minutes);
    secondsEl.innerHTML = timeFormater(seconds);
}

const timeFormater= time => {
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(countdown, 1000)