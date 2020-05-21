class ItemSet < ApplicationRecord
  belongs_to :user
  belongs_to :set_type
  has_many :requirements
end
