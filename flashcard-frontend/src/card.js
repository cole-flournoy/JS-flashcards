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
        <input type="submit" value="Submit">
      </form>
    ` 
    formDiv.innerHTML = form
    formDiv.children[0].addEventListener('submit', this.editCard.bind(this))
  }

  editCard(e){
    e.preventDefault()
    const cardFront = document.getElementById('front').value
    const cardBack = document.getElementById('back').value
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({card: {front: cardFront, back: cardBack}})
    }
    fetch(`http://localhost:3000/cards/${this.id}`, options)
    .then(resp => resp.json())
    .then(updatedCard => {
      let existingCard = Card.all.find(card => card.id === updatedCard.id)
      existingCard.front = updatedCard.front
      existingCard.back = updatedCard.back
      existingCard.deck.showDetail()
    })
  }
}




