class Moose < ApplicationRecord
  belongs_to :User
  belongs_to :parent, class_name: "Moose"
  has_many :children, class_name: "Moose", foreign_key: "parent_id"
end
