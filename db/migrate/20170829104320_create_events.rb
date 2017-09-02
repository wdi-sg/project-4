class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string  :title
      t.date :date_start
      t.time :time_start
      t.date :date_end
      t.time :time_end
      t.integer :total_slots
      t.string  :venue
      t.string :description
      t.integer :price_pax

      t.timestamps
    end
  end
end
