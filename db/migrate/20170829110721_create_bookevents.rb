class CreateBookevents < ActiveRecord::Migration[5.1]
  def change
    create_table :bookevents do |t|
      t.references :eventroom, foreign_key: true
      t.references :user, foreign_key: true
      t.time :time_start
      t.time :time_end
      t.integer :rsvp

      t.timestamps
    end
  end
end
