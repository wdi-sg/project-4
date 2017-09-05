class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string  :title
      t.datetime :event_start
      t.datetime :event_end
      t.integer :total_slots
      t.integer :remaining_slots
      t.string :event_image
      t.string  :venue
      t.string :description
      t.integer :price_pax

      t.timestamps
    end
  end
end
