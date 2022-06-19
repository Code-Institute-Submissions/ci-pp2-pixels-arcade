// Get elements from HTML
const levelEasy = document.getElementById("easy")
const levelMedium = document.getElementById("medium")
const levelHard = document.getElementById("hard")

let timer = document.getElementById("timer")
let matches = document.getElementById("matches")
let attempts = document.getElementById("flips")
let endScore = document.getElementById("end-score")
let endTime = document.getElementById("end-time")

// Our card array for the cards we'll generate
const cardsArray = [
  {
    name: "cat",
    img: "assets/images/cards/cat.webp",
  },
  {
    name: "cow",
    img: "assets/images/cards/cow.webp",
  },
  {
    name: "gorilla",
    img: "assets/images/cards/gorilla.webp",
  },
  {
    name: "elephant",
    img: "assets/images/cards/elephant.webp",
  },
  {
    name: "hippo",
    img: "assets/images/cards/hippo.webp",
  },
  {
    name: "lion",
    img: "assets/images/cards/lion.webp",
  },
  {
    name: "parrot",
    img: "assets/images/cards/parrot.webp",
  },
  {
    name: "bat",
    img: "assets/images/cards/bat.webp",
  },
  {
    name: "chameleon",
    img: "assets/images/cards/chameleon.webp",
  },
  {
    name: "deer",
    img: "assets/images/cards/deer.webp",
  },
  {
    name: "frog",
    img: "assets/images/cards/frog.webp",
  },
  {
    name: "ram",
    img: "assets/images/cards/ram.webp",
  },
  {
    name: "raven",
    img: "assets/images/cards/raven.webp",
  },
  {
    name: "sabre",
    img: "assets/images/cards/sabre.webp",
  },
  {
    name: "turtle",
    img: "assets/images/cards/turtle.webp",
  },
  {
    name: "walrus",
    img: "assets/images/cards/walrus.webp",
  },
]

// Our global variables
let gameLevel = "easy"
let gameOver = false
let time = 0
let flips = 0
let matchedCards = 0
let hasFlippedCard = false
let lockBoard = true
let firstCard
let secondCard
let gameCards = []

// Our EventListeners for our buttons in our HTML
levelEasy.addEventListener("click", levelOne)
levelMedium.addEventListener("click", levelTwo)
levelHard.addEventListener("click", levelThree)
reset.addEventListener("click", () => {
  location.reload() 
})