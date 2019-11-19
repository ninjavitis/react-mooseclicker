class AddPointsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :points, :bigint
  end
end
