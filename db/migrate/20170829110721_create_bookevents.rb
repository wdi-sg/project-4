class CreateBookevents < ActiveRecord::Migration[5.1]
  def change
    create_table :bookevents do |t|
      t.references :event, foreign_key: true
      t.references :user, foreign_key: true

      t.integer :no_pax
      t.integer :price_pax
      t.integer :total_price

      t.timestamps
    end
  end
end
