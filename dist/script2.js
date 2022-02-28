"use strict";
let delay = 1000;
let text = "ahojky";
let maxL = 1;
let myText = document.querySelectorAll("#aaa")
function greet() {
    console.log(text.slice(0,maxL) );
    maxL++;
    
    
    if(maxL>text.length){
        maxL = 1
    };

    setTimeout(greet, delay);

    
};


greet(




// let paragraph = document.createElement("p")
// paragraph.innerText = "jjj"
// document.querySelectorAll("#result").appendChild(paragraph)
// console.log(y)

