Group.fetchGroups()

const groupsButton = document.getElementById('allGroups') 
groupsButton.addEventListener('click', Group.appendGroups)

const decksButton = document.getElementById('allDecks') 
decksButton.addEventListener('click', Deck.appendDecks)

const mostCardsButton = document.getElementById('mostCards')
mostCardsButton.addEventListener('click', Deck.mostCards)


