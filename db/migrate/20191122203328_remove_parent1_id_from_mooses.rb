class RemoveParent1IdFromMooses < ActiveRecord::Migration[5.2]
  def change
    remove_column :mooses, :parent1_id, :bigint
  end
end
