class CreateItemTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :item_types do |t|
      t.belongs_to :item, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
