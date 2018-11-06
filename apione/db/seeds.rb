# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Todo.create([title:'Yard Work', created_by:'Cody'])
# Item.create([{name:'Mow Lawn', todo: 'Yard Work'},{name:'Rake Leaves', todo:'Yard Work'}])

50.times do
  todo = Todo.create(title: Faker::Lorem.word, created_by: 5)
  todo.items.create(name: Faker::Lorem.word, done: false)
end
