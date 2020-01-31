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

  def self.make(id, level, clicks, created_at, type, desc, image)
    collectible = {level:level, clicks:clicks, created_at:created_at, name:type, desc:desc, image:image}
  end

  private
  @clickProgression = [1,2,3,4,5,7,9,11,13,15,17,19,21,23,25,27,30,33,36]

  def self.levelUp(collectible)
    if collectible.clicks >= @clickProgression[collectible.level - 1]
      collectible.level = collectible.level + 1
      collectible.clicksToLevel = @clickProgression[collectible.level - 1]
    end
  end
end
