class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
      t.string :asset_type
      t.references :user, foreign_key: true
      t.time :time_start
      t.time :time_end

      t.timestamps
    end
  end
end
