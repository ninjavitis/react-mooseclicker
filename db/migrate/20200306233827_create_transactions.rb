class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.belongs_to :user, foreign_key: true
      t.bigint :amount
      t.string :category

      t.timestamps
    end
  end
end
