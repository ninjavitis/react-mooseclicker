class ChangeCollectibleProtoypesToCTypes < ActiveRecord::Migration[5.2]
  def change
    rename_table :collectible_prototypes, :cTypes
  end
end
