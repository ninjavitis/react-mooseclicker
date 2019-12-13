class Collectible < ApplicationRecord
  belongs_to :cType
  belongs_to :user

  after_initialize :init

  def init
    self.clicks ||= 0
    self.level ||= 1
  end
end
