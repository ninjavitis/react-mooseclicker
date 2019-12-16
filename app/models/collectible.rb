class Collectible < ApplicationRecord
  belongs_to :user
  belongs_to :ctype
end
