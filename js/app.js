const pokemons = [
  { name: "pikachu", image: "img/pikachu.png" },
  { name: "pikachu", image: "img/pikachu.png" },
  { name: "bulbasaur", image: "img/bulbasaur.png" },
  { name: "bulbasaur", image: "img/bulbasaur.png" },
  { name: "charmander", image: "img/charmander.png" },
  { name: "charmander", image: "img/charmander.png" },
  { name: "squirtle", image: "img/squirtle.png" },
  { name: "squirtle", image: "img/squirtle.png" },
  { name: "articuno", image: "img/articuno.png" },
  { name: "articuno", image: "img/articuno.png" },
  { name: "mewtwo", image: "img/mewtwo.png" },
  { name: "mewtwo", image: "img/mewtwo.png" },
];

pokemons.sort(() => 0.5 - Math.random());

const container = document.querySelector(".container");
const result = document.querySelector("#result");
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

function createBoard() {
  pokemons.forEach((item, i) => {
    let card = document.createElement("img");
    card.setAttribute("src", "img/card.png");
    card.setAttribute("data-id", i);
    card.setAttribute("class", "thumnail");
    card.addEventListener("click", flipCard);
    container.appendChild(card);
  });
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(pokemons[cardId].name);
  cardsChosenId.push(cardId);
  this.setAttribute("src", pokemons[cardId].image);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  var cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  console.log(optionOneId, optionTwoId);
  if (cardsChosen[0] === cardsChosen[1]) {
    // alert("You found a match");
    cards[optionOneId].style.visibility = "hidden";
    cards[optionTwoId].style.visibility = "hidden";
    console.log(cardsWon);
    cardsWon.push(cardsChosen);
  } else {
    console.log(cards[optionOneId], cards[optionTwoId]);
    cards[optionOneId].setAttribute("src", "img/card.png");
    cards[optionTwoId].setAttribute("src", "img/card.png");
    // alert("Sorry, try again");
  }

  cardsChosen = [];
  cardsChosenId = [];
  result.textContent = cardsWon.length;

  if (cardsWon.length === pokemons.length / 2) {
    result.textContent = "Congratulations, you found them all";
  }
}

createBoard();
