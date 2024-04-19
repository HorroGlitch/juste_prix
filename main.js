import './style.css'

let userInput = document.getElementById("user")
let price = Math.floor(Math.random() * 100);

let random = document.getElementById("random")
let score = document.getElementById("score")
let nbrPoints = 0

random.textContent = price

userInput.addEventListener("change", (e)=>{
  let userValue = parseInt(e.target.value)
  
  if (price - userValue === 0) {
    
    nbrPoints += 100
    score.textContent = nbrPoints
    console.log("if " + (price - userValue))

  } else if ((price - userValue <= 5 && price - userValue > 0) || (price - userValue >= -5 && price - userValue  < 0)) {
    
    nbrPoints += 50
    score.textContent = nbrPoints
    
  }
  
  console.log(userValue)
  console.log(price, userValue, "différence " + (price - userValue))

  price = Math.floor(Math.random() * 100);
  random.textContent = price
  
})