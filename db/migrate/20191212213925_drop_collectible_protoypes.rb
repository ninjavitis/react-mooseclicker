class DropCollectibleProtoypes < ActiveRecord::Migration[5.2]
  def up
    drop_table :collectiblePrototypes
  end
end
