class DeleteParent1IdFromMoose < ActiveRecord::Migration[5.2]
  def change
    remove_column :mooses, :parent1_id, :index
  end
end
