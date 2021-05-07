function fetchCards(){
  fetch("http://localhost:3000/cards")
  .then(resp => resp.json())
  .then(appendCards)
}

function appendCards(cards){
  for (let card of cards){
    console.log(card)
  }
}