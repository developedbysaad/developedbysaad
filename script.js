const countdown = () => {
    const countDate = new Date("May 08, 2023 20:00:00").getTime();

    const currentTime = new Date().getTime();

    const gap = countDate - currentTime;

    const millisecond = 1;
    const second = millisecond * 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;


    const textDays = Math.floor(gap / day);
    const textHours = Math.floor((gap % day) / hour);
    const textMinutes = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    console.log(textHours)
    document.getElementById('days').innerText = textDays;
    document.getElementById('hours').innerText = textHours;
    document.getElementById('minutes').innerText = textMinutes;
    document.getElementById('seconds').innerText = textSecond;

};

setInterval(countdown, 250);