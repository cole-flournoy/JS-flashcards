class Deck {
  static all = []
  
  constructor(deck){
    this.id = deck.id
    this.name = deck.name
    this.group = deck.group
    this.cards = deck.cards
    Deck.all.push(this)
  }

  static fetchDecks(){
    fetch("http://localhost:3000/decks")
    .then(resp => resp.json())
    .then(decks => {
      for (let deck of decks){
        let newDeck = new Deck(deck)
      }
      Deck.appendDecks(Deck.all)
    })
  }

  static appendDecks(decks){
    const deckDiv = document.getElementById('indexContainer')
    deckDiv.innerText = "All My Decks!"
    for (let deck of decks){
      const li = document.createElement('li')
      li.innerText = `${deck.name} (${deck.group.name})`
      deckDiv.append(li)
      li.addEventListener('click', deck.showDetail.bind(deck))
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
      li.innerText = `Front: ${card.front} - Back: ${card.back}`
      deckDiv.append(li)
    }
    // render new card form
  }
}








