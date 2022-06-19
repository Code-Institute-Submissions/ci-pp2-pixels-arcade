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