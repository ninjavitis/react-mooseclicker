class AddTierToCollectible < ActiveRecord::Migration[5.2]
  def change
    add_column :collectibles, :tier, :bigint
  end
end
