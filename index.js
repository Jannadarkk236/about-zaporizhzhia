window. onload = function(){
    window. setInterval(function(){
    var now = new Date();
    // if (hours <10) hours = "0" + hours;
    // if (minutes <10) hours = "0" + minutes;
    // if (seconds <10) hours = "0" + seconds;
    var clock = document. getElementById("clock");
    clock. innerHTML = now. toLocaleTimeString();
    },1000);
    };

    








    