console.log("Hello, world")


//  let x =  document.querySelector("#result").addEventListener("input", function(e){
//         return e.target.value
//     })

    let y = document.querySelector("#result2")

    let result = document.querySelector("#result")

    result.addEventListener("input", function(e){
        let x = e.target.value
        console.log(x)
        y.textContent = x
        


    })

    
// document.querySelector("#result2").textContent = e.target.value