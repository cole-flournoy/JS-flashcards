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
    .then(cards => {
      for (let card of cards){
        let newCard = new Card(card)
      }
      Card.appendCards
    })
  }

  static appendCards(cards){
    for (let card of cards){
      console.log(card)
    }
  }

}




