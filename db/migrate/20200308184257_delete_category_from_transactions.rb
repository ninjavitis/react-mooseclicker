class DeleteCategoryFromTransactions < ActiveRecord::Migration[5.2]
  def change
    remove_column :transactions, :category
  end
end
