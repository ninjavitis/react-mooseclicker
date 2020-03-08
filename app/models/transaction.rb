class Transaction < ApplicationRecord
  belongs_to :user, dependent: :destroy
  validates :user_id, presence: true
  validates :category, presence: true
  validates :amount, presence: true

  # DO NOT REMOVE ENUMS!
  enum category: {
    undefined:"undefined", 
    points:"points", 
    clicks:"clicks", 
    cash:"cash",
  }

end
