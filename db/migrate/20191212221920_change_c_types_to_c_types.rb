class ChangeCTypesToCTypes < ActiveRecord::Migration[5.2]
  def change
    rename_table :cTypes, :c_types
  end
end
