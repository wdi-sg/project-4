class CreateEventrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :eventrooms do |t|
      t.integer :pax
      t.boolean :availability
      t.string :name

      t.timestamps
    end
  end
end
