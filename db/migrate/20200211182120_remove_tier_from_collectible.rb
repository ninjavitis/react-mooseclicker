class RemoveTierFromCollectible < ActiveRecord::Migration[5.2]
  def change
    remove_column :collectibles, :tier, :bigint
  end
end
