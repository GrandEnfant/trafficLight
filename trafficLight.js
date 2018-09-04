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
var yellow = document.getElementsByClassName("yellowLight")[0];
var green = document.getElementsByClassName("greenLight")[0];

var setT = setTimeout(redF, 3000);


function redF() {
   var red = document.getElementsByClassName("redLight")[0];
    red.style.backgroundColor = "red";
        
}
function yellowF() {
    
    yellow.style.backgroundColor = "red";
}

function greenF() {
    
    green.style.backgroundColor = "red";
}

//document.getElementByClass ("redLight").style.backgroundColor = "grey";