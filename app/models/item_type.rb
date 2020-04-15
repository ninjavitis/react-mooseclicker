class ItemType < ApplicationRecord
  belongs_to :item

  has_many :item_variants, dependent: :destroy
end
