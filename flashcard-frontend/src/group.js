class Group {
  static all = []
  
  constructor(group){
    this.id = group.id
    this.name = group.name
    Group.all.push(this)
    this.decks = group.decks.map(deck => new Deck(deck))
  }

  static fetchGroups(){
    fetch("http://localhost:3000/groups")
    .then(resp => resp.json())
    .then(groups => {
      for (let group of groups){
        new Group(group)
      }
    })
  }

  static appendGroups(){
    const groupDiv = document.getElementById('indexContainer')
    groupDiv.innerText = "All My Groups!"
    for (let group of Group.all){
      group.appendGroup()
    }
    Group.newForm(groupDiv)
  }

  appendGroup(){
    const groupDiv = document.getElementById('indexContainer')
    const li = document.createElement('li')
    li.innerText = this.name
    li.id = this.id
    groupDiv.append(li)
    li.addEventListener('click', this.showDetail.bind(this))
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
  
    form.addEventListener('submit', Group.createGroup)
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
    .then(group => {
      new Group(group)
      Group.appendGroups()
    })
    e.target.reset()
  }

  showDetail(){
    const groupDiv = document.getElementById('indexContainer')
    groupDiv.innerText = `${this.name} Decks:`
    for (let deck of this.decks){
      const li = document.createElement('li')
      li.innerText = `${deck.name}`
      groupDiv.append(li)
    }
    Deck.newForm(groupDiv, this)
  }
}


