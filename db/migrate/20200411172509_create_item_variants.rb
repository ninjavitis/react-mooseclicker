class CreateItemVariants < ActiveRecord::Migration[5.2]
  def change
    create_table :item_variants do |t|
      t.belongs_to :item_type, foreign_key: true
      t.string :name
      t.string :artist_name
      t.string :desc
      t.integer :tier

      t.timestamps
    end
  end
end
