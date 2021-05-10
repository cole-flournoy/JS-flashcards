const groupsButton = document.getElementById('allGroups') 
groupsButton.addEventListener('click', Group.fetchGroups)

const decksButton = document.getElementById('allDecks') 
decksButton.addEventListener('click', Deck.fetchDecks)

// fetchCards()
