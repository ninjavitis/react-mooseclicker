class AddActiveMooseToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :activeMoose, :bigint
  end
end
