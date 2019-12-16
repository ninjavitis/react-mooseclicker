class DropCTypes < ActiveRecord::Migration[5.2]
  def change
    drop_table :c_types
  end
end
