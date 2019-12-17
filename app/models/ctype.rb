class Ctype < ApplicationRecord
  has_many :collectibles, dependent: :destroy
end
