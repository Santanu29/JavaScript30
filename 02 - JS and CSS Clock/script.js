const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();

    const secondDegrees = (seconds * 360) / 60;
    console.log(secondDegrees);
}

setInterval(setDate, 1000);