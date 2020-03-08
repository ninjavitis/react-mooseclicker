class ChangeTransactionCategoryToBeInt < ActiveRecord::Migration[5.2]
  def change
    change_column :transactions, :category, 'integer using cast (category as integer)'
  end
end
