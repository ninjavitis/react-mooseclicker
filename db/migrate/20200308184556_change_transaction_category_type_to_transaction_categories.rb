class ChangeTransactionCategoryTypeToTransactionCategories < ActiveRecord::Migration[5.2]
  def change
    change_column :transactions, :category, 'transaction_categories USING cast (category as transaction_categories)'
  end
end
