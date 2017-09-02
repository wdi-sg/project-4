class CreateBookrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :bookrooms do |t|
      t.references :meetingroom, foreign_key: true
      t.references :user, foreign_key: true
      t.time :time_start
      t.time :time_end
      t.integer :price

      t.timestamps
    end
  end
end
