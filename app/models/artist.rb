class Artist < ApplicationRecord
  has_many :ctypes
  has_many :collectibles, through: :ctypes
end
