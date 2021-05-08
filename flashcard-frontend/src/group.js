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
    groupDiv.append(li)
  }
}