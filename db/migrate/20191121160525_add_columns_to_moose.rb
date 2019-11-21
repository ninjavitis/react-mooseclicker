class AddColumnsToMoose < ActiveRecord::Migration[5.2]
  def change
    add_column :mooses, :name, :string
    add_column :mooses, :variant, :string
    add_column :mooses, :magic, :bool
    add_column :mooses, :age, :integer
    add_column :mooses, :clicksToLevel, :bigint
    add_column :mooses, :level, :bigint
    add_column :mooses, :parent1_id, :string
    add_index :mooses, :parent1_id
    add_column :mooses, :parent2_id, :string
    add_index :mooses, :parent2_id
  end
end
