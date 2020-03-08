class CreateTransactionCategories < ActiveRecord::Migration[5.2]
  def up
    execute <<-SQL
      CREATE TYPE transaction_categories AS enum ('undefined','points','clicks','cash');
    SQL
  end
end
