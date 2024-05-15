let count = 0;
let sec = 0;
let mins = 0;
let hrs = 0;

let timerId = null;


function stopwatch() {

    count = count + 1;

    if (count == 100) {
        count = 0;
        sec = sec + 1;

        if(sec==60){
            sec=0;
            mins++;

            if(mins==60){
                mins=0;
                hrs++;

            }
        }
    }

    let checkCount = (count<10) ? `0${count}` : count;
    let checkSec = (sec<10) ? `0${sec}` : sec;
    let checkMins = (mins<10) ? `0${mins}` : mins;
    let checkHrs = (hrs<10) ? `0${hrs}` : hrs;

    document.getElementById("count").innerHTML = checkCount;
    document.getElementById("sec").innerHTML = checkSec;
    document.getElementById("mins").innerHTML = checkMins;
    document.getElementById("hrs").innerHTML = checkHrs;
}


function start() {

    if(timerId!== null){
        clearInterval(timerId);
    }

    timerId = setInterval(stopwatch, 10);
}

function stop() {
    clearInterval(timerId);
}

function reset() {
    clearInterval(timerId);

    document.getElementById("count").innerHTML = '00';
    document.getElementById("sec").innerHTML = '00';
    document.getElementById("mins").innerHTML = '00';
    document.getElementById("hrs").innerHTML = '00';

    // [count, sec, mins, hrs] = [0, 0, 0 , 0];
    // OR, 

    count= sec = mins = hrs = 0;


}