class DropMooses < ActiveRecord::Migration[5.2]
  def change
    drop_table :mooses
  end
end
