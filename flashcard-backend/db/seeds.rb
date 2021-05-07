# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


span = Group.create(name: "Spanish")
fren = Group.create(name: "French")


d = Deck.create(name: "Food", group: span)
d2 = Deck.create(name: "Colors", group: span)
d3 = Deck.create(name: "Pronouns", group: fren)

Card.create(front: "Cheese", back: "Queso", deck: d)
Card.create(front: "Bread", back: "Pan", deck: d)
Card.create(front: "Taco", back: "Taco", deck: d)
Card.create(front: "Pineapple", back: "Piña", deck: d)

Card.create(front: "Red", back: "Rojo", deck: d2)
Card.create(front: "Blue", back: "Azul", deck: d2)
Card.create(front: "Green", back: "Verde", deck: d2)
Card.create(front: "Yellow", back: "Amarillo", deck: d2)
Card.create(front: "Black", back: "Negro", deck: d2)
Card.create(front: "White", back: "Blanco", deck: d2)

Card.create(front: "I", back: "Je", deck: d3)
Card.create(front: "You", back: "Tu", deck: d3)
Card.create(front: "He", back: "Il", deck: d3)
Card.create(front: "She", back: "Elle", deck: d3)
Card.create(front: "It/They (Singular)", back: "On", deck: d3)
Card.create(front: "We", back: "Nous", deck: d3)
Card.create(front: "You (All)", back: "Vous", deck: d3)
Card.create(front: "They (Masc.)", back: "Ils", deck: d3)
Card.create(front: "They (Fem.)", back: "Elles", deck: d3)