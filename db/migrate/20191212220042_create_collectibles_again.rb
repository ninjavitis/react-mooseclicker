class CreateCollectiblesAgain < ActiveRecord::Migration[5.2]
  def change
    create_table :collectibles do |t|
      t.belongs_to :user, foreign_key: true
      t.belongs_to :cType, foreign_key: true
      t.bigint :clicks
      t.bigint :level

      t.timestamps
    end
  end
end
