# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


collectibleData = [
  ['Standard Moose', 'A standard moose', '', 0, 'Bob Ross'],
  ['Bog Standard Moose', 'A moose native to boggy areas', 1, ''],
  ['Mega Moose', 'Five times larger than a standard moose', 2, ''],
  ['Mangy Moose', 'This moose has quite a bit of mange', 3, ''],
  ['Christmas Moose', 'A festive moose for the holidays', 4, ''],
  ['Ultra Moose', 'The ultimate in moose evolution', 5, ''],
  ['Moose w/ Squirrel', '', 5, '']
]

collectibleData.each do |name,desc,image,tier,artist|
  Ctype.create(
    name:name, 
    desc:desc, 
    image:image,
    tier:tier,
    artist:artist,
  )
end