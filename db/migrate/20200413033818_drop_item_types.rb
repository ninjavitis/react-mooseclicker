class DropItemTypes < ActiveRecord::Migration[5.2]
  def change
    drop_table :item_types
  end
end
