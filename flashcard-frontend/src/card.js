class Card {
  static all = []
  
  constructor(card){
    this.id = card.id
    this.front = card.front
    this.back = card.back
    this.deck = card.deck
    Card.all.push(this)
  }

  static fetchCards(){
    fetch("http://localhost:3000/cards")
    .then(resp => resp.json())
    .then(cards => {
      for (let card of cards){
        let newCard = new Card(card)
      }
      Card.appendCards(Card.all)
    })
  }

  static appendCards(cards){
    for (let card of cards){
      console.log(card)
    }
  }

  static renderEditForm(div, card){
    const form = `
      <form id="editCard">
        <input id="front" type="text" value="${card.front}">
        <input id="back" type="text" value="${card.back}">
        <input id="cardId" type="hidden" value=${card.id}>
        <input type="submit" value="Submit">
      </form>
    ` 
    div.innerHTML += form 
  }
}




