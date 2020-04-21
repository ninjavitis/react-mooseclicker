class Ctype < ApplicationRecord
  has_many :collectibles, dependent: :destroy
  belongs_to :artist
end
