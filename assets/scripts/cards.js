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

// Starting to construct the board
const board = document.getElementById("board")
const grid = document.createElement("div")
grid.setAttribute("class", "grid")
board.appendChild(grid)

/**
 * Function to select a number of random cards from our earlier array
 * First locally declare a temporary array
 * Then shuffle our cardsArray
 * Depending which level we've selected on our main screen, we'll slice
 * from our shuffled cards
 * Then use concatenation and save to our earlier globally declared gameCards array,
 * so we have pairs
 */
function numberOfCards () {
  let selectedCards = []
  let randomCards = cardsArray.sort(() => 0.5 - Math.random())
  if (gameLevel === "easy") {
    selectedCards = randomCards.slice(0, 6)
  } else if (gameLevel === "medium") {
    selectedCards = randomCards.slice(0, 8)
  } else if (gameLevel === "hard") {
    selectedCards = randomCards.slice(0, 10)
  } 
  gameCards = selectedCards.concat(selectedCards)
}

/**
 * The function to create the cards
 * First sort the gameCards array to properly mix the cards
 * Then create divs and add the classes card, front-face and back-face,
 * so we can add our EventListener, and style the cards so they can be flipped
 * And append everything together
 */
function createCards() {
  gameCards.sort(() => 0.5 - Math.random())
  gameCards.forEach((item) => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.dataset.name = item.name
    card.addEventListener("click", flipCard)

    const frontFace = document.createElement('div');
    frontFace.classList.add('front-face');
    frontFace.style.backgroundImage = `url(${item.img})`;

    const backFace = document.createElement('div');
    backFace.classList.add('back-face');
    
    
    grid.appendChild(card);
    card.appendChild(frontFace);
    card.appendChild(backFace);
  })
}


// Our EventListeners for our buttons in our HTML
levelEasy.addEventListener("click", levelOne)
levelMedium.addEventListener("click", levelTwo)
levelHard.addEventListener("click", levelThree)
reset.addEventListener("click", () => {
  location.reload() 
})