





var red = document.getElementsByClassName("redLight")[0];
var yellow = document.getElementsByClassName("yellowLight")[0];
var green = document.getElementsByClassName("greenLight")[0];

var inputRed = document.getElementsByName("inputRed")[0].value;
var inputGreen = document.getElementsByName("inputGreen")[0].value;
//получили элементы
function redF() {
    'use strict';
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "#9f990b";
    green.style.backgroundColor = "#0c5706";
    var start = setTimeout(yellowF, 3000);
}

function yellowF() {
    'use strict';
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "#0c5706";
    red.style.backgroundColor = "red";
    var startt = setTimeout(greenF, inputGreen);
}

function greenF() {
    'use strict';
    green.style.backgroundColor = "green";
    yellow.style.backgroundColor = "#9f990b";
    red.style.backgroundColor = "#5d061a";
    var starttt = setTimeout(redF, inputRed);
}
redF();
function Start() {
    'use strict';
    redF();
}

