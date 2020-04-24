class CreateItemSets < ActiveRecord::Migration[5.2]
  def change
    create_table :item_sets do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true
      t.boolean :complete

      t.timestamps
    end
  end
end
