class Collectible < ApplicationRecord
  belongs_to :cType
  belongs_to :user
end
