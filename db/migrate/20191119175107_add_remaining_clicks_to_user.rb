class AddRemainingClicksToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :remainingClicks, :bigint
  end
end
