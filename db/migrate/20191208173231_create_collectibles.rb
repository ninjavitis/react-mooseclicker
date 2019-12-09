class CreateCollectibles < ActiveRecord::Migration[5.2]
  def change
    create_table :collectibles do |t|
      t.string :name
      t.string :type
      t.text :description
      t.string :imageURL

      t.timestamps
    end
  end
end
