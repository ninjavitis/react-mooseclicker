# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


collectibleData = [
  ['Standard Moose', 'Moose', 'A standard moose', ''],
  ['Limited Edition Moose', 'Moose', 'A limited edition moose', ''],
  ['Bog Standard Moose', 'Moose',  'A moose native to boggy areas', ''],
  ['Christmas Moose', 'Moose', 'A festive moose for the holidays', ''],
  ['Mega Moose', 'Moose', 'Five times larger than a standard moose', ''],
  ['Mangy Moose', 'Moose', 'This moose has quite a bit of mange', '']
]

collectibleData.each do |name,collectible_type,description,imageURL|
  Collectible.create(
    name:name, 
    collectible_type:collectible_type,
    description:description, 
    imageURL:imageURL,
  )
end