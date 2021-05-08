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

function newGroupForm(){
  const formCont = document.getElementById('newFormContainer')
  formCont.innerHTML = ''
  const form = document.createElement('form')
  
  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.setAttribute('id', 'groupName')
  input.setAttribute('placeholder', 'Name of New Group')
  
  const submit = document.createElement('input')
  submit.setAttribute('type', 'submit')
  submit.setAttribute('value', 'Submit')

  form.append(input, submit)
  formCont.append(form)

  submit.addEventListener('click', createGroup)
}

function createGroup(e){
  e.preventDefault()
  const userInput = document.getElementById('groupName').value
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({group: {name: userInput}})
  }

  fetch("http://localhost:3000/groups", options)
  .then(resp => resp.json())
  .then(fetchGroups)

  e.target.parentElement.reset()
}