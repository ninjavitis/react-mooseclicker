class AddClicksToLevelToCollectible < ActiveRecord::Migration[5.2]
  def change
    add_column :collectibles, :clicksToLevel, :bigint
  end
end
