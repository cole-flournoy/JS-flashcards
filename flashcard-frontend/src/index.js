Group.fetchGroups()

const groupsButton = document.getElementById('allGroups') 
groupsButton.addEventListener('click', Group.fetchGroups)

const decksButton = document.getElementById('allDecks') 
decksButton.addEventListener('click', Deck.appendDecks)



// fetchCards()

// function bigFetch(){
//   fetch("http://localhost:3000/groups")
//   .then(resp => resp.json())
//   .then(groups => {
//    for (let group of groups){
//       let newGroup = new Group(group)
//     }
//   })
// }


