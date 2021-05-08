function fetchDecks(){
  fetch("http://localhost:3000/decks")
  .then(resp => resp.json())
  .then(appendDecks)
}

function appendDecks(decks){
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
