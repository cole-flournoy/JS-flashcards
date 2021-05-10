class Group {
  static all = []
  
  constructor(group){
    this.id = group.id
    this.name = group.name
    this.decks = group.decks
    Group.all.push(this)
  }

  static fetchGroups(){
    fetch("http://localhost:3000/groups")
    .then(resp => resp.json())
    .then(groups => {
      for (let group of groups){
        let newGroup = new Group(group)
      }
      Group.appendGroups(groups)
    })
  }

  static appendGroups(groups){
    const groupDiv = document.getElementById('indexContainer')
    groupDiv.innerText = "All My Groups!"
    for (let group of groups){
      const li = document.createElement('li')
      li.innerText = group.name
      li.id = group.id
      groupDiv.append(li)
      // li.addEventListener('click', fetchGroup)
    }
    Group.newForm(groupDiv)
  }

  static newForm(div){
    const form = document.createElement('form')
    
    const input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'groupName')
    input.setAttribute('placeholder', 'New Group')
    
    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    submit.setAttribute('value', 'Submit')
  
    form.append(input, submit)
    div.append(form)
  
    submit.addEventListener('click', Group.createGroup)
  }
  
  static createGroup(e){
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
    .then(Group.fetchGroups)
    // instantiate new group
    e.target.parentElement.reset()
  }
}


// function fetchGroup(e){
//   const groupId = e.target.id
//   fetch(`http://localhost:3000/groups/${groupId}`)
//   .then(resp => resp.json())
//   .then(appendGroup)
// }

// function appendGroup(group){
//   const detailDiv = document.getElementById('detailContainer')
//   detailDiv.innerText = `${group.name} Decks!`
//   for (let deck of group.decks){
//     const li = document.createElement('li')
//     li.innerText = deck.name
//     detailDiv.append(li)
//   }
// }



