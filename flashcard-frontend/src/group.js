function fetchGroups(){
  fetch("http://localhost:3000/groups")
  .then(resp => resp.json())
  .then(appendGroups)
}


function appendGroups(groups){
  const groupDiv = document.getElementById('indexContainer')
  groupDiv.innerText = "All My Groups!"
  for (let group of groups){
    const li = document.createElement('li')
    li.innerText = group.name
    li.id = group.id
    groupDiv.append(li)
    li.addEventListener('click', fetchGroup)
  }
}

function fetchGroup(e){
  const groupId = e.target.id
  fetch(`http://localhost:3000/groups/${groupId}`)
  .then(resp => resp.json())
  .then(appendGroup)
}

function appendGroup(group){
  const detailDiv = document.getElementById('detailContainer')
  detailDiv.innerText = `${group.name} Decks!`
  for (let deck of group.decks){
    const li = document.createElement('li')
    li.innerText = deck.name
    detailDiv.append(li)
  }
}