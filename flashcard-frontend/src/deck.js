class Deck {
  static all = []
  
  constructor(deck){
    this.id = deck.id
    this.name = deck.name
    this.group = Group.all.find(group => group.id === deck.group_id)
    Deck.all.push(this)
    this.cards = deck.cards.map(card => new Card(card))
  }

  appendDeck(){
    const deckDiv = document.getElementById('indexContainer')
    const li = document.createElement('li')
    li.innerText = `${this.name} (${this.group.name})`
    deckDiv.append(li)
    li.addEventListener('click', this.showDetail.bind(this))
  }

  static appendDecks(){
    const decks = Deck.all
    const deckDiv = document.getElementById('indexContainer')
    deckDiv.innerText = "All My Decks!"
    for (let deck of decks){
      deck.appendDeck()
    }
  }

  static newForm(div, group){
    let form = `
      <form id="newDeck">
        <input id="deckName" type="text" placeholder="New ${group.name} Deck">
        <input id="group" type="hidden" value=${group.id}>
        <input type="submit" value="Submit">
      </form>
    `
    div.innerHTML += form 
    form = document.getElementById('newDeck')
    form.addEventListener('submit', Deck.createDeck)
  }

  static createDeck(e){
    e.preventDefault()
    const userInput = document.getElementById('deckName').value
    const group = parseInt(document.getElementById('group').value)
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({deck: {name: userInput, group_id: group}})
    }
  
    fetch("http://localhost:3000/decks", options)
    .then(resp => resp.json())
    .then(deck => {
      new Deck(deck)
      // redirect to add cards to the new deck
    })
    const form = document.getElementById('newDeck')
    form.reset()
  }

  showDetail(){
    const deckDiv = document.getElementById('indexContainer')
    deckDiv.innerText = `${this.name} Deck - (${this.group.name})`
    for (let card of this.cards){
      const li = document.createElement('li')
      const button = document.createElement('button')
      button.setAttribute('id', 'cardEditButton')
      button.innerText = "Edit"
      li.innerText = `Front: ${card.front} - Back: ${card.back} `
      li.append(button)

      button.addEventListener('click', () => card.renderEditForm(deckDiv))
      deckDiv.append(li)
    }
    const formDiv = document.createElement('div')
    formDiv.setAttribute('id', 'formDiv')
    deckDiv.append(formDiv)
    Card.renderCreateForm(this)
  }
}








