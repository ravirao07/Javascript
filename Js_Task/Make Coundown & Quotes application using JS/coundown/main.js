let dayitems = document.getElementById('days');
let hritems = document.getElementById('hours');
let minitems = document.getElementById('min');
let secitems = document.getElementById('second');

let countdown = ()=>{
    let fetureDate = new Date("1 jan 2025");
    let currentDate = new Date();
    let myDate = fetureDate - currentDate
    // console.log(myDate);
    let days= Math.floor(myDate /1000 / 60 / 60 / 24);
    let hours=Math.floor(myDate / 1000 / 60 / 60) % 24;
    let mins=Math.floor(myDate / 1000 / 60) % 60;
    let secs=Math.floor(myDate / 1000) % 60;
    dayitems.innerHTML = days;
    hritems.innerHTML = hours;
    minitems.innerHTML = mins;
    secitems.innerHTML = secs;
};
setInterval(countdown, 1000);
