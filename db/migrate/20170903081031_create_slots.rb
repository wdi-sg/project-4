class CreateSlots < ActiveRecord::Migration[5.1]
  def change
    create_table :slots do |t|
      t.string :time_start
      t.string :time_end

      t.timestamps
    end
  end
end
