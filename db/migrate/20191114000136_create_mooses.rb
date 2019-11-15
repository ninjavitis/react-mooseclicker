class CreateMooses < ActiveRecord::Migration[5.2]
  def change
    create_table :mooses do |t|
      t.string :type
      t.string :subtype
      t.bigint :clicks
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
