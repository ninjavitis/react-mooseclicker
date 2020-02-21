class CreateClicksItems < ActiveRecord::Migration[5.2]
  def change
    create_table :clicks_items do |t|
      t.string :name
      t.string :desc
      t.bigint :price
      t.bigint :value
      t.string :image

      t.timestamps
    end
  end
end
