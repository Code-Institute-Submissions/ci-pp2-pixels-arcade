// Our HTML elements
const board = document.getElementById("board")
const result = document.getElementById("result")
const score = document.getElementById("score")
const endScore = document.getElementById("end-score")
const startButton = document.getElementById("start")
const reset = document.getElementById("reset")
const fire = document.getElementById("fire")
const left = document.getElementById("left")
const right = document.getElementById("right")
const wrap = document.getElementById("wrap")

// Our global variables
let currentPosition = 217
let width = 15
let direction = 1
let goingRight = true
let invadersRemoved = []
let points = 0
let gameEnd = ""
let invadersId = 0
let intervalTime = 0
let noWrap = true

let tankHealth = 30
let bossHealth = 30
let bossId = 0
let bossPosition = 14
let bossGoingRight = true
let bossDirection = 1
let bossDied = false
let invadersDead = false
let bombInterval

// Our for loop creating our board
for (let i = 0; i < 240; i++) {
  const square = document.createElement("div")
  board.appendChild(square)
}

const squares = Array.from(document.querySelectorAll("#board div"))

// Our invaders array
const invaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

// Function to add invaders to the board
function draw() {
  for (let i = 0; i < invaders.length; i++) {
      if (!invadersRemoved.includes(i)){
          squares[invaders[i]].classList.add("invader")
      }
  }
}

// Function to remove invaders from the board
function remove() {
  for (let i = 0; i < invaders.length; i++) {
      squares[invaders[i]].classList.remove("invader")
  }
}

squares[currentPosition].classList.add("tank")
//Our event listeners
document.addEventListener("keydown", shoot)
document.addEventListener("keydown", moveTank)
startButton.addEventListener("click", startGame)
fire.addEventListener("click", shoot)
left.addEventListener("click", moveTank)
right.addEventListener("click", moveTank)
reset.addEventListener("click", () => {
  location.reload() 
})