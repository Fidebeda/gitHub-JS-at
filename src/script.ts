const text = document.querySelector(".text")
const label = document.querySelector(".label")
const speed = document.querySelector("#speed")
const myText = "Píšeme automatický text"
let idLetter = 1

let delay = 500 / speed.value



function printText(){
    text.innerText = myText.slice(0,idLetter)
    idLetter ++
    if(idLetter>myText.length){
        idLetter = 1
    }
    setTimeout(printText, delay)
}

printText()


speed.addEventListener("input", function(e){
    console.log(e.target.value)
    delay = 500 / e.target.value
    
    
})
















