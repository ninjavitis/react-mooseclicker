class AddLastClickTimeToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :lastclick, :datetime
  end
end
