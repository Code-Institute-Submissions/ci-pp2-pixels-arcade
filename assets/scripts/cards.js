// Get elements from HTML
const levelEasy = document.getElementById("easy")
const levelMedium = document.getElementById("medium")
const levelHard = document.getElementById("hard")

let timer = document.getElementById("timer")
let matches = document.getElementById("matches")
let attempts = document.getElementById("flips")
let endScore = document.getElementById("end-score")
let endTime = document.getElementById("end-time")



// Our EventListeners for our buttons in our HTML
levelEasy.addEventListener("click", levelOne)
levelMedium.addEventListener("click", levelTwo)
levelHard.addEventListener("click", levelThree)
reset.addEventListener("click", () => {
  location.reload() 
})