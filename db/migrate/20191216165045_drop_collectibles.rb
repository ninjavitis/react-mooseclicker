class DropCollectibles < ActiveRecord::Migration[5.2]
  def change
    drop_table :collectibles
  end
end
