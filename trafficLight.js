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

var test = document.getElementsByClassName ("redLight");
var time = 0;
function func() {
 test.style.marginLeft = time + 'px'; 
 time = time + 3;
 } 
setInterval(func, 5000);
 

//document.getElementByClass ("redLight").style.backgroundColor = "grey";