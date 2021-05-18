class Card {
  static all = []
  
  constructor(card){
    this.id = card.id
    this.front = card.front
    this.back = card.back
    this.deck = Deck.all.find(deck => deck.id === card.deck_id)
    Card.all.push(this)
  }

  renderEditForm(div){
    const formDiv = document.getElementById('formDiv')
    const form = `
      <form id="editCard">
        <input id="front" type="text" value="${this.front}">
        <input id="back" type="text" value="${this.back}">
        <input type="submit" value="Edit">
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
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else {
        throw new Error(resp)
      }
    })
    .then(updatedCard => {
      let existingCard = Card.all.find(card => card.id === updatedCard.id)
      existingCard.front = updatedCard.front
      existingCard.back = updatedCard.back
      existingCard.deck.showDetail()
    })
    .catch(error => alert(error))
  }

  static renderCreateForm(deck){
    const formDiv = document.getElementById('formDiv')
    const form = `
      <form id="createCard">
        <input id="front" type="text" placeholder="Front">
        <input id="back" type="text" placeholder="Back">
        <input id="deck" type="hidden" value="${deck.id}">
        <input type="submit" value="Create Flashcard">
      </form>
    ` 
    formDiv.innerHTML = form
    formDiv.children[0].addEventListener('submit', this.createCard.bind(this))

  }

  static createCard(e){
    e.preventDefault()
    const cardFront = document.getElementById('front').value
    const cardBack = document.getElementById('back').value
    const cardDeck = parseInt(document.getElementById('deck').value)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({card: {front: cardFront, back: cardBack, deck_id: cardDeck}})
    }
  
    fetch("http://localhost:3000/cards", options)
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else {
        throw new Error(resp)
      }
    })
    .then(card => {
      const newCard = new Card(card)
      newCard.deck.cards.push(newCard)
      newCard.deck.showDetail()
    })
    .catch(error => alert(error))
  }

  quizDisplayCard(div, side=this.front){
    div.innerText = side
    let button = document.createElement('button')
    button.innerText = 'flip'
    button.setAttribute('id', 'flip')
    div.append(button)
    button.addEventListener('click', this.flip.bind(this))
  }

  flip(){
    const cardDiv = document.getElementById('flashcard')
    if (cardDiv.innerText === this.front + "flip"){
      this.quizDisplayCard(cardDiv, this.back)
    } else {
      this.quizDisplayCard(cardDiv, this.front)
    }
  }

}




