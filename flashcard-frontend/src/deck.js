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
      Deck.appendDecks(decks)
    })
  }

  static appendDecks(decks){
    const detailDiv = document.getElementById('detailContainer')
    detailDiv.innerText = ''
    const deckDiv = document.getElementById('indexContainer')
    deckDiv.innerText = "All My Decks!"
    for (let deck of decks){
      const li = document.createElement('li')
      li.innerText = `${deck.name} (${deck.group.name})`
      deckDiv.append(li)
    }
  }

  static newForm(){
    const formCont = document.getElementById('newFormContainer')
    formCont.innerHTML = ''
    const form = document.createElement('form')
    
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'deckName')
    input.setAttribute('placeholder', 'Name of New Deck')
  
    // const groupLabel = document.createElement('label')
    // groupLabel.setAttribute('value', 'Group: ')
    
    // const group = document.createElement('select')
    // const options = 
    // for (let option of options)
    // group.append
    
    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'Submit')
  
    form.append(input, submit)
    formCont.append(form)
  
    submit.addEventListener('click', Deck.createDeck)
  }

  static createDeck(e){
    e.preventDefault()
    const userInput = document.getElementById('deckName').value
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({deck: {name: userInput}})
    }
  
    fetch("http://localhost:3000/groups", options)
    .then(resp => resp.json())
    .then(Deck.fetchDecks)
    // instantiate new deck
    e.target.parentElement.reset()
  }
}








