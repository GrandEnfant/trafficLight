/*
var trafficLight = document.getElementById ("trafficLight");
ctx = trafficLight.getContext('2d'); 


ctx.fillStyle = "grey" ;
 ctx.fillRect (250, 0, 250, 750);


ctx.arc(375, 187.5, 100, 0*Math.PI, 2*Math.PI, true);
ctx.strokeStyle = "red";
ctx.stroke();


ctx.arc(375, 425, 100, 0*Math.PI, 2*Math.PI, true);
ctx.strokeStyle = "yellow";
ctx.stroke();


ctx.arc(375, 650, 100, 0*Math.PI, 2*Math.PI, true);
ctx.strokeStyle = "green";
ctx.stroke();
*/
//var red = document.getElementsByClassName("redLight")[0];

//var yellow = document.getElementsByClassName("yellowLight")[0];
//var green = document.getElementsByClassName("greenLight")[0];


var yellow = document.getElementsByClassName("yellowLight")[0];
var red = document.getElementsByClassName('redLight')[0];
var green = document.getElementsByClassName("greenLight")[0];

function redF() {
    'use strict';
    
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#9f990b";
    green.style.backgroundColor = "#0c5706";
    
    //document.getElementsByClassName('redLight').style.backgroundColor = '#2C81b7';
}
function yellowF() {
    'use strict';
    
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "#5d061a";
    green.style.backgroundColor = "#0c5706";
}

function greenF() {
    'use strict';
    
    green.style.backgroundColor = "green";
    yellow.style.backgroundColor = "#9f990b";
    red.style.backgroundColor = "#5d061a";
    
}
function redYellowF() {
    'use strict';
    
    green.style.backgroundColor = "#0c5706";
    yellow.style.backgroundColor = "yellow";
    red.style.backgroundColor = "red";
    
}



var currentColor = 1;

function switcher() {
    'use strict';

    switch (currentColor) {
    /*case 0:
        yellowF();
        currentColor = 2;
        break;
      */
    case 1:
        greenF();
        currentColor = 3;
        break;
            
    case 2:
        redYellowF();
        currentColor = 1;
        break;
    

    case 3: redF();
        currentColor = 1;
        break;
}
}
var setT = setTimeout(redF, 0);
var setRY = setTimeout(redYellowF, 1500);
//var setY = setTimeout(yellowF, 3000);
var setG = setTimeout(greenF, 6000);
//document.getElementByClass ("redLight").style.backgroundColor = "grey";