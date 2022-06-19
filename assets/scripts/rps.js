// Our elements we want to interact with
const computer = document.getElementById("computer-choice")
const user = document.getElementById("user-choice")
const computerScore = document.getElementById("computer-score")
const userScore = document.getElementById("user-score")
const roundCount = document.getElementById("round")
const roundResult = document.getElementById("result")
const endScore = document.getElementById("end-score")
const gameOver = document.querySelector("#game-over")

const choices = document.querySelectorAll(".selections")
const threeRounds = document.getElementById("three-rounds")
const fiveRounds = document.getElementById("five-rounds")
const roundText = document.getElementById("round-text")

// Our global variables
let computerPick
let userPick
let result
let userPoints = 0
let computerPoints = 0
let round = 0
let numberOfRounds = 3

// Our EventListeners
threeRounds.addEventListener("click", playThree)
fiveRounds.addEventListener("click", playFive)
reset.addEventListener("click", () => {
  location.reload() 
})