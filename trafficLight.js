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




function redF() {
    'use strict';
    var red = document.getElementsByClassName('redLight')[0];
    red.style.backgroundColor = "red";
    //document.getElementsByClassName('redLight').style.backgroundColor = '#2C81b7';
}
function yellowF() {
    'use strict';
    var yellow = document.getElementsByClassName("yellowLight")[0];
    yellow.style.backgroundColor = "yellow";
}

function greenF() {
    'use strict';
    var green = document.getElementsByClassName("greenLight")[0];
    green.style.backgroundColor = "green";
}
var setT = setTimeout(redF, 3000);
var setY = setTimeout(yellowF, 6000);
var setG = setTimeout(greenF, 9000);


var currentColor = 0;

function switcher() {
    'use strict';
    if (currentColor = 0) {redF();
                   currentColor = 1;
                   }
    switch (currentColor) {
    case 1:
            yellowF();
    current = 2;
    break;
            
    case 2:
    greenF();
    current = 3;
    break;
            
    case 3: 
    redF();
    current = 1;
            break;
} }

//document.getElementByClass ("redLight").style.backgroundColor = "grey";