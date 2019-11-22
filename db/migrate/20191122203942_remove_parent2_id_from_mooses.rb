class RemoveParent2IdFromMooses < ActiveRecord::Migration[5.2]
  def change
    remove_column :mooses, :parent2_id, :bigint
  end
end
