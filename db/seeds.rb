#  Example collectible data
collectibleData = [
  ['Standard Moose', 'A standard moose', '', 0, 'Bob Ross'],
  ['Bog Standard Moose', 'A moose native to boggy areas', 1, ''],
  ['Mega Moose', 'Five times larger than a standard moose', 2, ''],
  ['Mangy Moose', 'This moose has quite a bit of mange', 3, ''],
  ['Christmas Moose', 'A festive moose for the holidays', 4, ''],
  ['Ultra Moose', 'The ultimate in moose evolution', 5, ''],
  ['Moose w/ Squirrel', '', 5, '']
]

# Example item data
itemData = [
  ['100 CP','This pack gives you 100 CP to spend on collectibles!',1.00,100,'points'],
  ['300 CP','This pack gives you 300 CP to spend on collectibles!',1.00,300,'points'],
  ['500 CP','This pack gives you 500 CP to spend on collectibles!',1.00,500,'points'],
  ['750 CP','This pack gives you 750 CP to spend on collectibles!',1.00,750,'points'],
  ['1000 CP','This pack gives you 1000 CP to spend on collectibles!',1.00,1000,'points'],
  ['10 Clicks','Get 10 more clicks to advance your collectibles!',10,10,'clicks'],
  ['30 Clicks','Get 30 more clicks to advance your collectibles!',28,30,'clicks'],
  ['50 Clicks','Get 50 more clicks to advance your collectibles!',45,50,'clicks'],
  ['75 Clicks','Get 75 more clicks to advance your collectibles!',69,75,'clicks'],
  ['100 Clicks','Get 100 more clicks to advance your collectibles!',90,100,'clicks'],
]

# itemData.each do |name, desc, price, value, item_type|
#   Item.create(
#     name:name,
#     desc:desc,
#     price:price,
#     value:value,
#     item_type:item_type,
#   )
# end

# collectibleData.each do |name,desc,image,tier,artist|
#   Ctype.create(
#     name:name, 
#     desc:desc, 
#     image:image,
#     tier:tier,
#     artist:artist,
#   )
#end