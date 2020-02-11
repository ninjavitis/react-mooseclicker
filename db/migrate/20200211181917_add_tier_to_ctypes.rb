class AddTierToCtypes < ActiveRecord::Migration[5.2]
  def change
    add_column :ctypes, :tier, :bigint
  end
end
