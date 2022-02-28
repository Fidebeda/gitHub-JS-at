
let delay = 1000
let text = "ahoj"
function greet(){
    console.log(text)

    setTimeout(greet, delay)
}

greet(