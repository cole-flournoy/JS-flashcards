class Card {
  constructor(card){
    this.id = card.id
    this.front = card.front
    this.back = card.back
    this.deck = card.deck
  }

  static fetchCards(){
    fetch("http://localhost:3000/cards")
    .then(resp => resp.json())
    .then(Card.appendCards)
  }

  static appendCards(cards){
    for (let card of cards){
      console.log(card)
    }
  }
  
}




