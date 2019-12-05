class Moose < ApplicationRecord
  belongs_to :user

  def self.click(current_user,active_moose)  
    if current_user.remainingClicks > 0
      current_user.decrement!(:remainingClicks)
      active_moose.clicks = active_moose.clicks + 1
      levelUp(active_moose)
      active_moose.save
    end
  end

  private
  @clickProgression = [1,2,3,4,5,7,9,11,13,15,17,19,21,23,25,27,30,33,36]

  def self.levelUp(moose)
    if moose.clicks >= @clickProgression[moose.level - 1]
      moose.level = moose.level + 1
      moose.clicksToLevel = @clickProgression[moose.level - 1]
    end
  end
end
