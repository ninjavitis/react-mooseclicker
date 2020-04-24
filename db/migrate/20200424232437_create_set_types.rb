class CreateSetTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :set_types do |t|
      t.string :name
      t.integer :tier
      t.string :reward_type
      t.integer :reward_value

      t.timestamps
    end
  end
end
