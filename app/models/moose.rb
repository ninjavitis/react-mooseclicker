class Moose < ApplicationRecord
  belongs_to :user, optional: true
end
