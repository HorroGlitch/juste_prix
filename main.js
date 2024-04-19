import './style.css'

alert('Welcome to The "Prix presque juste" Simple rules: you have to drag the range bar the closest to the top number on your screen, 50 pts if you\'re 5 numbers near to it, 100 pts if you are perfectly on it. Good luck!')

let scoreboard = [

  {
   
  },
  
]

let userInput = document.getElementById("user")
let price = Math.floor(Math.random() * 100);

let random = document.getElementById("random")
let score = document.getElementById("score")
let nbrPoints = 0

random.textContent = price
let timer = 1000

setTimeout(() => {
  let playerName = prompt("Veuillez taper un nom de gagnant")
  return alert("Bravo " + playerName + "! Tu as gagné " + nbrPoints + " points")
}, 30 * timer);

  userInput.addEventListener("change", (e)=>{

    let userValue = parseInt(e.target.value)
    
    if (price - userValue === 0) {
      
      nbrPoints += 100
      score.textContent = nbrPoints
      console.log("if " + (price - userValue))
  
    } else if ((price - userValue <= 5 && price - userValue > 0) || (price - userValue >= -5 && price - userValue < 0)) {
      
      nbrPoints += 50
      score.textContent = nbrPoints
      
    }
    
    console.log(userValue)
    console.log(price, userValue, "différence " + (price - userValue))
  
    price = Math.floor(Math.random() * 100);
    random.textContent = price
    
  })
  


