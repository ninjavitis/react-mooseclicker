class ChangeCollectiblesToCollectiblePrototypes < ActiveRecord::Migration[5.2]
  def change
    rename_table :collectibles, :collectiblePrototypes
  end
end
