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

// Move the invaders back and forth across the screen
function moveInvaders() {
  const leftEdge = invaders[0] % width === 0
  const rightEdge = invaders[invaders.length - 1] % width === width - 1
  remove()

  // Bounces the invaders off the edges of the screen. If noWrap === false invaders can wrap instead
  if (rightEdge && goingRight && noWrap === true) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += width + 1
      direction = - 1
      goingRight = false
    }
  }

  if (leftEdge && !goingRight && noWrap === true) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += width - 1
      direction = 1
      goingRight = true
    }
  }

  for (let i = 0; i < invaders.length; i++) {
    invaders[i] += direction
  }
  
  draw() 
  
  if (invaders.length === invadersRemoved.length) {
    invadersDead = true
    clearInterval(invadersId)
  }
  
  checkEnd()
}

// Function to spawn the boss ship and move it back and forth
function spawnBoss() {
  bossId = setInterval(moveBoss, intervalTime)
  bombInterval = setInterval(dropBomb, 1500)
  
  function moveBoss() {
    squares[bossPosition].classList.remove("boss")
    bossPosition += bossDirection
    squares[bossPosition].classList.add("boss")
    bombInterval

    if (bossPosition === 29 && bossGoingRight) {
    bossDirection = - 1
    bossGoingRight = false
    }
    
    if (bossPosition === 15 && !bossGoingRight) {
    bossDirection  = + 1
    bossGoingRight = true
    }
   
  }
}

/**
 * function for boss to drop bombs and kill the tank
 */
 function dropBomb() {
  let bombId  = setInterval(moveBomb, 200)
  let bombPosition = bossPosition
  
  function moveBomb() {
    squares[bombPosition].classList.remove("bomb")
    bombPosition += width
    squares[bombPosition].classList.add("bomb")

    if (bombPosition > (squares.length - 15)) {
      squares[bombPosition].classList.remove("bomb")
      clearInterval(bombId)
      return
    }

    if (squares[bombPosition].classList.contains("tank")) {
      squares[bombPosition].classList.remove("bomb")
      squares[bombPosition].classList.add("boom")
      setTimeout(() => squares[bombPosition].classList.remove("boom"), 200)
      clearInterval(bombId)
      tankHealth -= 10
    }
    checkEnd()
  }
}

/**
 * Function to move the tank across the bottom of the screen
 * Can control the tank with arrows, a and d keys or the arrows on the screen
 */
 function moveTank(event) {
  squares[currentPosition].classList.remove("tank")
  if ((event.key === "ArrowLeft" || event.key === "a" || event.target.id === "left")
      && currentPosition % width !== 0){
    currentPosition -= 1
  }
  if ((event.key === "ArrowRight" || event.key === "d" || event.target.id === "right") 
      && currentPosition % width < width - 1) {
    currentPosition += 1
  }
  squares[currentPosition].classList.add("tank")
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