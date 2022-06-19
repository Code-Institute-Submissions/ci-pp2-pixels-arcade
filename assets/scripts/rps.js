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

// Our functions to select our levels
function playThree() {
  threeRounds.removeEventListener("click", playThree)
  fiveRounds.removeEventListener("click", playFive)
  threeRounds.classList.add("current-level")
  numberOfRounds = 3
  roundText.innerHTML = "Three"
}

function playFive() {
  threeRounds.removeEventListener("click", playThree)
  fiveRounds.removeEventListener("click", playFive)
  fiveRounds.classList.add("current-level")
  numberOfRounds = 5
  roundText.innerHTML = "Five"
}

/**
 * We use the forEach method set the userPick variable from the ID of the image they selected
 * And then call userChoice to display an image, and call computerChoice and compare
 */
 choices.forEach(choice => choice.addEventListener("click", (event) => {
  userPick = event.target.id
  userChoice()
  computerChoice()
  compare()
}))

function userChoice() {
  if (userPick === "rock") {
    user.src = "assets/images/rps/rock-right.webp"
  }
  if (userPick === "paper") {
    user.src = "assets/images/rps/paper-right.webp"
  }
  if (userPick === "scissors") {
    user.src = "assets/images/rps/scissors-right.webp"
  }
}

/**
 * The computerChoice function randomly picks a number and then assigns the computerPick
 * and displays it's choice
 * We could hardcode 3 for choices.length as we're only deciding between 3 options, but
 * if we decide to add an option for the user to select between classic RPS and Rock, Paper,
 * Scissors, Lizard, Spock or another varient, using a global variable makes it more dynamic
 */
function computerChoice() {
  const randomChoice = Math.floor(Math.random() * choices.length)
  if (randomChoice === 0) {
    computerPick = "rock"
    computer.src = "assets/images/rps/rock-left.webp"
  }
  if (randomChoice === 1) {
    computerPick = "paper"
    computer.src = "assets/images/rps/paper-left.webp"
  }
  if (randomChoice === 2) {
    computerPick = "scissors"
    computer.src = "assets/images/rps/scissors-left.webp"
  }
}

// Our EventListeners
threeRounds.addEventListener("click", playThree)
fiveRounds.addEventListener("click", playFive)
reset.addEventListener("click", () => {
  location.reload() 
})