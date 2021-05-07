function fetchGroups(){
  fetch("http://localhost:3000/groups")
  .then(resp => resp.json())
  .then(appendGroups)
}

function appendGroups(groups){
  for (let group of groups){
    console.log(group)
  }
}