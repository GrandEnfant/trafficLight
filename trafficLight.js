var trafficLight = document.getElementById ("trafficLight");
ctx = trafficLight.getContext('2d'); 


ctx.fillStyle = "grey" ;
 ctx.fillRect (250, 0, 250, 750);

ctx.arc(125, 187.5, 125, 1.1*Math.PI, 1.9*Math.PI);