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

//  function runRightInterval(timer) {

//     let gameInterval = setInterval(() => {
//         $(".ball").offset({top: pos.top + 10, left: pos.left + 10})
//         pos = $(".ball").offset();
//         if (pos.left === bord) {
//             console.log(pos);
//             console.log(bord);
//             console.log(startPosit);


//             // runLeftInterval(timer)
//         }
//     }, timer);
// };

// function runLeftInterval(timer) {
//     let gameInterval = setInterval(() => {
//         $(".ball").offset({top: pos.top + 10, left: pos.left - 10})
//         pos = $(".ball").offset();
//         console.log("test " + pos )
//         // if (pos.left === startPosit) {
//         //     runRightInterval(timer)
//         // }
//     }, timer);
// };

let direct;

// function runInterval(timer) {

//     if (direct === true) {
//         let gameInterval = setInterval( () => {
//             $(".ball").offset({top: pos.top + 10, left: pos.left + 10})
//             pos = $(".ball").offset();

//     }, timer);
//     if (Math.floor( pos.left) === Math.floor( bord)) {
//         direct = false;
//         return
//     }
//     } else if (direct === false) {
//         let gameInterval = setInterval(() => {
//             $(".ball").offset({top: pos.top + 10, left: pos.left - 10})
//             pos = $(".ball").offset();

//     }, timer);
//     if (Math.floor( pos.left) === Math.floor( startPosit )) {
//         direct = true;
//         return
//     }
//     }
// };

function runIntervalStart(timer) {
        if (pos.left > 10) {
            direct = true;
        }
    
        let gameInterval = setInterval( () => {
            $(".ball").offset({top: pos.top + 10, left: pos.left + 10})
            pos = $(".ball").offset();
            if (Math.floor( pos.left) === Math.floor( bord)) {
                direct = false;
                runLeftInterval(timer); 
            }
    }, timer);
    


};


function runRightInterval(timer) {

    // do {
    //     let gameInterval = setInterval(() => {
    //                 $(".ball").offset({top: pos.top + 10, left: pos.left + 10})
    //                 pos = $(".ball").offset();
    //             }, timer);
    // } while (Math.floor( pos.left) != Math.floor( bord) );
    
    // direct = false;
    // runLeftInterval(timer)
    for ( let i = pos.left; direct === true; ) {
        let gameInterval = setInterval(() => {
            $(".ball").offset({top: pos.top + 10, left: pos.left + 10})
            pos = $(".ball").offset();
        }, timer);
        if (Math.floor( pos.left) === Math.floor( bord)) {
            direct = false;
         
        }
    }
    return



};

function runLeftInterval(timer) {

    // do {
    //     let gameInterval = setInterval(() => {
    //                 $(".ball").offset({top: pos.top + 10, left: pos.left - 10})
    //                 pos = $(".ball").offset();
    //             }, timer);
    // } while (Math.floor( pos.left) != Math.floor( startPosit ) );
    
    // direct = true;
    // runRightInterval(timer)
    
    for (let i = pos.left; direct === false; ) {
        console.log( "xxxxxxxxxx")
        setInterval(() => {
            console.log( "zzzzzzzzzzz")
            $(".ball").offset({top: pos.top + 10, left: pos.left - 10})
            console.log( pos.left)
            pos = $(".ball").offset();
        }, timer);
        if (Math.floor( pos.left) === Math.floor( startPosit)) {
            direct = true;
           
        }
    }

    return 
};





createTable();
let pos = $(".ball").offset();
const bord = pos.left + 400;
const startPosit =  pos.left;
console.log(pos);
console.log(startPosit);
console.log(bord);

runIntervalStart(timer);

// for (let i = pos.left; i < bord; i += 10) {
//     // if (i === 3) { continue; }
//     // text += "The number is " + i + "<br>";
//     runRightInterval(timer);
//     console.log(i)
//   }

// if (pos.left < bord) {
//     runRightInterval(timer);
// } else if (pos.left > bord) {
//  runLeftInterval(timer);
// }
// for (let i = pos.left; i < bord; ) {
//     console.log(i +"x")
//     if (i < bord) {  
//          runRightInterval(timer)
//     } else if  (i > startPosit) {  
//         runLeftInterval(timer)
//    }
 
//   }