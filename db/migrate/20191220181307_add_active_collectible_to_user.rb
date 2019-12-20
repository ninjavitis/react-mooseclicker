class AddActiveCollectibleToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :activeCollectible, :bigint
  end
end
