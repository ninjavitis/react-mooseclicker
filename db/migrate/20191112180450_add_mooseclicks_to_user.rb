class AddMooseclicksToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :mooseclicks, :bigint
  end
end
