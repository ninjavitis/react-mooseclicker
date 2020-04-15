class DropItemVariants < ActiveRecord::Migration[5.2]
  def change
    drop_table :item_variants
  end
end
