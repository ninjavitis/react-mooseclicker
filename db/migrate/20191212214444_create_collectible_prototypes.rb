class CreateCollectiblePrototypes < ActiveRecord::Migration[5.2]
  def change
    create_table :collectible_prototypes do |t|
      t.string :cType
      t.string :name
      t.string :desc
      t.string :image

      t.timestamps
    end
  end
end
