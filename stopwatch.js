let sec = 0, min = 0, hr = 0;
let dispSec = 0, dispMin = 0, dispHr = 0;
let interval = null;
let timerStatus = "stopped";

function timer(){
    sec++;

    if(sec / 60 === 1){
        sec = 0;
        min++;

        if(min / 60 === 1){
            min = 0;
            hr++;
        }
    }

    dispSec = (sec < 10) ? "0" + sec : sec;
    dispMin = (min < 10) ? "0" + min : min;
    dispHr = (hr < 10) ? "0" + hr : hr;

    document.getElementById("timeDisplay").innerHTML = dispHr + ":" + dispMin + ":" + dispSec;
}

window.onload = function(){
    document.getElementById('begin').addEventListener('click', function(){
        if(timerStatus === "stopped"){
            interval = window.setInterval(timer, 1000);
            document.getElementById("begin").innerHTML = "Stop";
            timerStatus = "started";
        }
        else{
            window.clearInterval(interval);
            document.getElementById("begin").innerHTML = "Begin";
            timerStatus = "stopped";
        }
    });

    document.getElementById('clear').addEventListener('click', function(){
        window.clearInterval(interval);
        sec = 0;
        min = 0;
        hr = 0;
        document.getElementById("timeDisplay").innerHTML = "00:00:00";
        document.getElementById("begin").innerHTML = "Begin";
    });
    document.getElementById('additionalReset').addEventListener('click', function(){
        window.clearInterval(interval);
        sec = 0;
        min = 0;
        hr = 0;
        document.getElementById("timeDisplay").innerHTML = "00:00:00";
        document.getElementById("begin").innerHTML = "Begin";
    });
};
