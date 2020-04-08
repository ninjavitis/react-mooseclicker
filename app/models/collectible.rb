class Collectible < ApplicationRecord
  belongs_to :user
  belongs_to :ctype

  def self.click(current_user,active_collectible)  
    if current_user.remainingClicks > 0
      current_user.decrement!(:remainingClicks)
      active_collectible.clicks = active_collectible.clicks + 1

      # check to see if the collectible should level up
      levelUp(active_collectible)
      
      active_collectible.save
    end
  end
  
  # wrapper for make that takes an activerecord collecible object
  def self.make_from_object(c)
    collectible = make(
      c.id, 
      c.level, 
      c.clicks, 
      c.clicksToLevel,
      c.created_at, 
      c.ctype.name, 
      c.ctype.desc, 
      c.ctype.image, 
      c.ctype.artist,
      c.ctype.tier,
    )
  end

  # packages a flat collectible object from arbitrary inputs for display in the front end
  def self.make(id, level, clicks, clicksToLevel, created_at, type, desc, image, artist, tier)
    collectible = {
      id:id,
      level:level, 
      clicks:clicks, 
      created_at:created_at, 
      name:type, 
      desc:desc, 
      image:image,
      artist:artist,
      tier:tier,
      clicksToLevel:clicksToLevel,
    }
  end

  private
  @xp_table = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,33,36,39,42,45,48,51,54,57,60,64,68,72,76,80,84,88,92,96,100]

  def self.levelUp(collectible)
    if collectible.clicks >= (@xp_table[collectible.level - 1] || 9999)
      collectible.level = collectible.level + 1
      collectible.clicksToLevel = @xp_table[collectible.level - 1]
    end
  end
end
