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