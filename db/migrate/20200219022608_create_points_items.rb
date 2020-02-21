class CreatePointsItems < ActiveRecord::Migration[5.2]
  def change
    create_table :points_items do |t|
      t.string :name
      t.string :desc
      t.float :price
      t.bigint :value
      t.string :image

      t.timestamps
    end
  end
end
