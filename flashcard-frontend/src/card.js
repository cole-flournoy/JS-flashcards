class Card {
  static all = []
  
  constructor(card){
    this.id = card.id
    this.front = card.front
    this.back = card.back
    this.deck = Deck.all.find(deck => deck.id === card.deck_id)
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

  renderEditForm(div){
    const formDiv = document.getElementById('formDiv')
    const form = `
      <form id="editCard">
        <input id="front" type="text" value="${this.front}">
        <input id="back" type="text" value="${this.back}">
        <input id="cardId" type="hidden" value=${this.id}>
        <input type="submit" value="Submit">
      </form>
    ` 
    formDiv.innerHTML = form
  }
}




