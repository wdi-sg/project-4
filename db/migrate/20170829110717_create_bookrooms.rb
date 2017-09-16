class CreateBookrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :bookrooms do |t|
      t.references :meetingroom, foreign_key: true
      t.references :user, foreign_key: true
      t.string :slot
      t.integer :price
      t.string :date_start

      t.timestamps
    end
  end
end
