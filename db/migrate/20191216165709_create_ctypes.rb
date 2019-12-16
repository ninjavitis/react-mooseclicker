class CreateCtypes < ActiveRecord::Migration[5.2]
  def change
    create_table :ctypes do |t|
      t.string :name
      t.string :desc
      t.string :image

      t.timestamps
    end
  end
end
