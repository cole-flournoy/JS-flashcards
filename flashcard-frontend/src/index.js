Group.fetchGroups()

const groupsButton = document.getElementById('allGroups') 
groupsButton.addEventListener('click', Group.appendGroups)

const decksButton = document.getElementById('allDecks') 
decksButton.addEventListener('click', Deck.appendDecks)




