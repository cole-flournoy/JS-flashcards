function fetchDecks(){
  fetch("http://localhost:3000/decks")
  .then(resp => resp.json())
  .then(appendDecks)
}

function appendDecks(decks){
  for (let deck of decks){
    console.log(deck)
  }
}