class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string  :title
      t.string :event_start
      t.string :event_end
      t.integer :total_slots
      t.integer :remaining_slots
      t.string  :venue
      t.string :description
      t.integer :price_pax

      t.timestamps
    end
  end
end
