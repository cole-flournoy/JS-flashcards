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
    
    const quizButton = document.createElement('button')
    quizButton.setAttribute('id', 'quizDeckButton')
    quizButton.innerText = "Study"
    deckDiv.append(li, quizButton)
    
    li.addEventListener('click', this.showDetail.bind(this))
    quizButton.addEventListener('click', this.quiz.bind(this))
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
    form.addEventListener('submit', this.createDeck)
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
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else {
        throw new Error(resp)
      }
    })
    .then(deck => {
      if (deck.id){
        const newDeck = new Deck(deck)
        newDeck.group.decks.push(newDeck)
        newDeck.group.showDetail()
      } else {
        throw new Error(deck.error)
      }
    })
    .catch(error => alert(error))
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

  quiz(){
    const deckDiv = document.getElementById('indexContainer')
    deckDiv.innerHTML = ''
    const cardDiv = document.createElement('div')
    cardDiv.setAttribute('id', 'flashcard')
    deckDiv.append(cardDiv)
    const instructions = document.createElement('h2')
    instructions.innerText = "Use left and right arrows to navigate between cards"
    deckDiv.append(instructions)
    this.cards[0].quizDisplayCard(cardDiv) 
    
    let index = 0
    document.addEventListener('keydown', e => {
      if (e.key === "ArrowLeft"){
        if (index - 1 < 0){
          index = 0
          this.cards[index].quizDisplayCard(cardDiv)
        } else {
          index -= 1
          this.cards[index].quizDisplayCard(cardDiv)
        }
      }
      if (e.key === "ArrowRight"){
        if (index + 1 > this.cards.length - 1){
          this.showDetail()
        } else {
          index += 1
          this.cards[index].quizDisplayCard(cardDiv)
        }
      }
    })
  }

  static mostCards(){
    let allDecks = [...Deck.all]
    allDecks.sort((a, b) => b.cards.length - a.cards.length)
    allDecks[0].showDetail()
  }
}








