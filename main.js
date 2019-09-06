'use strict'
let timer = 100;


let createTable = () => {
    const container = $("<div class='container'></div>");
    const ball = $("<div class='ball'></div>");
    const racket = $("<div class='racket'></div>");
    
    
    container.append(ball);
    container.append(racket);
    
    $('body').append(container);   
};

 function runRightInterval(timer) {

    let gameInterval = setInterval(() => {
        $(".ball").offset({top: pos.top + 10, left: pos.left + 10})
        pos = $(".ball").offset();
    }, timer);
};

function runLeftInterval(timer) {
    let gameInterval = setInterval(() => {
        $(".ball").offset({top: pos.top + 10, left: pos.left - 10})
        pos = $(".ball").offset();
    }, timer);
};

createTable();
let pos = $(".ball").offset();
console.log(pos)

if (pos.left < 500) {
    runRightInterval(timer);
} else if (pos.left > 0) {
 runLeftInterval(timer);
}
