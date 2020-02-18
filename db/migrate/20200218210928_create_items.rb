class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :desc
      t.float :price
      t.bigint :value
      t.string :image
      t.string :item_type

      t.timestamps
    end
  end
end
