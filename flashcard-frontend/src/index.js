const groupsButton = document.getElementById('allGroups') 
groupsButton.addEventListener('click', Group.fetchGroups)

const decksButton = document.getElementById('allDecks') 
decksButton.addEventListener('click', Deck.fetchDecks)

const newGroupButton = document.getElementById('newGroup')
newGroupButton.addEventListener('click', Group.newForm)

const newDeckButton = document.getElementById('newDeck')
newDeckButton.addEventListener('click', Deck.newForm)

// fetchCards()
